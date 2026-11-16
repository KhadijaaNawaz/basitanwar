#!/usr/bin/env python3
"""Recolour Lottie JSON files to the site palette.

usage: python3 tools/recolor-lottie.py            (rewrites public/json/brand/*)
Edit PALETTE / FILES below to change colours or which files are processed.
Colours are remapped by hue family + lightness, so shading is preserved:
  warm hues (red/orange/yellow) -> gold ramp   (--primary / --secondary / --accent-soft)
  neutrals & cool hues          -> warm ink ramp (#16130F .. white)
`invert` flips the ink ramp (for animations placed directly on a dark background).
"""
import json, colorsys, sys, os

ROOT = os.path.join(os.path.dirname(__file__), '..', 'public', 'json')
FILES = {  # source -> (output, invert)
    'maintain.json': ('brand/gears.json', False),
    'HZOLp5oMTk.json': ('brand/steps.json', False),
    'Available 24 Hours.json': ('brand/clock.json', False),
    'Service Agent Survey.json': ('brand/support.json', False),
}
EXTRA = [('Available 24 Hours.json', 'brand/clock-gold.json', 'gold')]  # every colour -> gold ramp
GOLD = [(0.12, '#4a3810'), (0.35, '#8A6A24'), (0.55, '#B08833'), (0.75, '#FFCF87'), (0.92, '#FFEFD2')]
INK_DARK, INK_LIGHT = '#16130F', '#FFFFFF'

def hx(h): h = h.lstrip('#'); return [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
def mix(a, b, t): return [a[i] + (b[i] - a[i]) * t for i in range(3)]

def ramp(stops, L):
    if L <= stops[0][0]: return hx(stops[0][1])
    for (l0, c0), (l1, c1) in zip(stops, stops[1:]):
        if L <= l1: return mix(hx(c0), hx(c1), (L - l0) / (l1 - l0))
    return hx(stops[-1][1])

def remap(rgb, invert):
    r, g, b = rgb[:3]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    if invert == 'gold': return ramp(GOLD, l)
    warm = s > 0.18 and (h < 0.17 or h > 0.92)
    if warm: return ramp(GOLD, l)
    return mix(hx(INK_DARK), hx(INK_LIGHT), 1 - l if invert else l)

def fix_rgb(arr, invert):
    if isinstance(arr, list) and len(arr) >= 3 and all(isinstance(x, (int, float)) for x in arr[:3]):
        arr[:3] = [round(x, 4) for x in remap(arr[:3], invert)]

def fix_color(c, invert):
    if not isinstance(c, dict): return
    k = c.get('k')
    if c.get('a') == 1 and isinstance(k, list):
        for kf in k:
            for key in ('s', 'e'):
                if key in kf: fix_rgb(kf[key], invert)
    else:
        fix_rgb(k, invert)

def walk(n, invert):
    if isinstance(n, dict):
        if n.get('ty') in ('fl', 'st') and 'c' in n: fix_color(n['c'], invert)
        if n.get('ty') in ('gf', 'gs') and 'g' in n:
            g = n['g']; cnt = g.get('p', 0); k = g.get('k', {})
            def grad(vals):
                for i in range(cnt):
                    o = i * 4
                    if o + 3 < len(vals): vals[o+1:o+4] = [round(x, 4) for x in remap(vals[o+1:o+4], invert)]
            if k.get('a') == 1:
                for kf in k['k']:
                    for key in ('s', 'e'):
                        if key in kf: grad(kf[key])
            else: grad(k['k'])
        if n.get('ty') == 2 and 'v' in n and isinstance(n['v'], dict): fix_color(n['v'], invert)  # effect colour
        for v in n.values(): walk(v, invert)
    elif isinstance(n, list):
        for v in n: walk(v, invert)

for src, (out, inv) in list(FILES.items()) + [(a, (b, c)) for a, b, c in EXTRA]:
    d = json.load(open(os.path.join(ROOT, src)))
    walk(d, inv)
    json.dump(d, open(os.path.join(ROOT, out), 'w'), separators=(',', ':'))
    print('wrote', out)
