import React, { useId } from 'react'

/**
 * The 3D-minimal tool set.
 *
 * Every tool is one inline SVG shaded with the gradients in <Defs>, so the
 * "3D" lives entirely inside the object: a light edge, a mid body, a dark
 * underside. No images, no WebGL, ~0 KB of network. Colours come from the
 * --tool-* CSS variables (see style/home.module.css, `.home`), so re-skinning
 * every tool is a change to a handful of variables.
 *
 * To add a tool: write a component below, register it in TOOLS.
 */

const stop = (offset, v) => <stop offset={offset} style={{ stopColor: `var(${v})` }} />

/** Shared gradients. `p` namespaces ids so several tools can sit on one page. */
const Defs = ({ p }) => (
  <defs>
    {/* "H" = shaded across a horizontal bar (top→bottom), "V" = across a vertical bar */}
    {[
      ['steel', ['--tool-steel-hi', '--tool-steel-mid', '--tool-steel-lo']],
      ['acc', ['--tool-accent-hi', '--tool-accent-mid', '--tool-accent-lo']],
      ['ink', ['--tool-ink-hi', '--tool-ink-mid', '--tool-ink-lo']],
      ['white', ['--tool-white-hi', '--tool-white-mid', '--tool-white-lo']],
    ].flatMap(([name, [a, b, c]]) => [
      <linearGradient key={name} id={`${p}-${name}`} x1="0" y1="0" x2="0" y2="1">
        {stop(0, a)}
        {stop(0.38, a)}
        {stop(0.62, b)}
        {stop(1, c)}
      </linearGradient>,
      <linearGradient key={`${name}V`} id={`${p}-${name}V`} x1="0" y1="0" x2="1" y2="0">
        {stop(0, a)}
        {stop(0.38, a)}
        {stop(0.62, b)}
        {stop(1, c)}
      </linearGradient>,
    ])}
  </defs>
)

const Svg = ({ viewBox = '0 0 200 200', className, children, p }) => (
  <svg
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <Defs p={p} />
    {/* contact shadow, then the object lit by the shared tool-lit filter (see ToolDefs) */}
    <ellipse cx={viewBox === '0 0 220 80' ? 110 : 100} cy={viewBox === '0 0 220 80' ? 76 : 194} rx={viewBox === '0 0 220 80' ? 80 : 54} ry="6" fill="#000" opacity=".22" filter="url(#tool-soft)" />
    <g filter="url(#tool-lit)">{children}</g>
  </svg>
)

const f = (p, n) => `url(#${p}-${n})`

/* ------------------------------------------------------------------ */

export const Wrench = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <g transform="translate(100 100) scale(.9) rotate(-40) translate(-110 -40)">
      <mask id={`${p}-jaw`}>
        <rect width="220" height="80" fill="#fff" />
        <rect x="-6" y="29" width="54" height="22" rx="2" fill="#000" />
      </mask>
      <rect x="50" y="31" width="132" height="18" rx="9" fill={f(p, 'steel')} />
      <rect x="58" y="34" width="112" height="3" rx="1.5" fill="#fff" opacity=".6" />
      <circle cx="40" cy="40" r="32" fill={f(p, 'steel')} mask={`url(#${p}-jaw)`} />
      <path d="M17 17 A32 32 0 0 1 56 12" stroke="#fff" strokeWidth="3" fill="none" opacity=".55" strokeLinecap="round" />
      <path
        fillRule="evenodd"
        fill={f(p, 'steel')}
        d="M186 14a26 26 0 1 0 .01 0zM186 28a12 12 0 1 1-.01 0z"
      />
      <circle cx="186" cy="40" r="12" fill="none" stroke="var(--tool-steel-lo)" strokeWidth="2" opacity=".7" />
      </g>
    </Svg>
  )
}

export const Drill = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <path d="M72 98H112L124 168Q125 176 116 176H86Q76 176 76 168Z" fill={f(p, 'inkV')} />
      <rect x="60" y="172" width="76" height="18" rx="6" fill={f(p, 'ink')} />
      <path
        d="M36 58Q36 46 48 46H132Q144 46 144 58V90Q144 100 134 100H48Q36 100 36 90Z"
        fill={f(p, 'acc')}
      />
      <rect x="36" y="50" width="16" height="46" rx="6" fill={f(p, 'ink')} />
      <rect x="62" y="52" width="70" height="4" rx="2" fill="#fff" opacity=".45" />
      <rect x="144" y="58" width="24" height="28" rx="4" fill={f(p, 'steel')} />
      <rect x="168" y="68" width="30" height="8" rx="3" fill={f(p, 'steel')} />
      <path d="M172 70l5 6M180 70l5 6M188 70l5 6" stroke="var(--tool-steel-lo)" strokeWidth="1.5" />
      <rect x="112" y="100" width="12" height="16" rx="4" fill={f(p, 'steelV')} />
      <rect x="80" y="62" width="40" height="3" rx="1.5" fill="var(--tool-accent-lo)" opacity=".5" />
    </Svg>
  )
}

export const Roller = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <rect x="95" y="122" width="22" height="64" rx="10" fill={f(p, 'inkV')} />
      <path d="M96 140h20M96 150h20M96 160h20" stroke="var(--tool-ink-lo)" strokeWidth="2" opacity=".6" />
      <path
        d="M154 56H176Q186 56 186 66V98Q186 108 176 108H106V124"
        fill="none"
        stroke={f(p, 'steelV')}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="22" y="32" width="136" height="48" rx="18" fill={f(p, 'acc')} />
      <rect x="36" y="38" width="108" height="5" rx="2.5" fill="#fff" opacity=".55" />
      <path d="M52 80v14q0 7 6 7t6-7V80" fill="var(--tool-accent-mid)" />
    </Svg>
  )
}

export const Bulb = ({ className }) => {
  const p = useId().replace(/:/g, '')
  const glass =
    'M100 20C62 20 40 48 40 80C40 104 54 118 66 134C71 141 72 146 72 152H128C128 146 129 141 134 134C146 118 160 104 160 80C160 48 138 20 100 20Z'
  return (
    <Svg className={className} p={p}>
      <path d={glass} fill={f(p, 'white')} stroke="var(--tool-white-lo)" strokeWidth="2" />
      {/* lit state, faded in by the Emergency scene */}
      <path d={glass} fill={f(p, 'acc')} data-bulb-on opacity="0" />
      <path
        d="M86 142V104L93 90L100 104L107 90L114 104V142"
        fill="none"
        stroke="var(--tool-ink-mid)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M58 52Q64 38 80 32" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" opacity=".75" />
      <rect x="74" y="152" width="52" height="12" rx="3" fill={f(p, 'steel')} />
      <rect x="74" y="166" width="52" height="12" rx="3" fill={f(p, 'steel')} />
      <rect x="76" y="180" width="48" height="10" rx="3" fill={f(p, 'steel')} />
      <path d="M82 190H118Q110 198 100 198Q90 198 82 190Z" fill={f(p, 'ink')} />
    </Svg>
  )
}

export const Pipe = ({ className }) => {
  const p = useId().replace(/:/g, '')
  const d = 'M44 30V112Q44 156 88 156H170'
  return (
    <Svg className={className} p={p}>
      <path d={d} fill="none" stroke="var(--tool-steel-lo)" strokeWidth="40" strokeLinecap="butt" />
      <path d={d} fill="none" stroke="var(--tool-steel-mid)" strokeWidth="30" />
      <path d={d} fill="none" stroke="var(--tool-steel-hi)" strokeWidth="11" transform="translate(-6 -6)" opacity=".9" />
      <rect x="22" y="18" width="44" height="16" rx="5" fill={f(p, 'acc')} />
      <rect x="164" y="134" width="16" height="44" rx="5" fill={f(p, 'accV')} />
      <circle cx="30" cy="26" r="2.5" fill="var(--tool-accent-lo)" />
      <circle cx="58" cy="26" r="2.5" fill="var(--tool-accent-lo)" />
      <circle cx="172" cy="142" r="2.5" fill="var(--tool-accent-lo)" />
      <circle cx="172" cy="170" r="2.5" fill="var(--tool-accent-lo)" />
    </Svg>
  )
}

export const AC = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <rect x="14" y="48" width="172" height="76" rx="20" fill={f(p, 'white')} stroke="var(--tool-white-lo)" strokeWidth="2" />
      <rect x="28" y="60" width="144" height="3" rx="1.5" fill="var(--tool-white-lo)" />
      <rect x="28" y="68" width="144" height="3" rx="1.5" fill="var(--tool-white-lo)" />
      <rect x="26" y="98" width="148" height="16" rx="8" fill={f(p, 'ink')} />
      <rect x="26" y="104" width="148" height="7" rx="3.5" fill={f(p, 'white')} />
      <circle cx="160" cy="84" r="4" fill="var(--tool-accent-mid)" />
      <rect x="30" y="80" width="30" height="6" rx="3" fill="var(--tool-white-lo)" />
      <g className="ac_air" fill="none" stroke="var(--tool-steel-hi)" strokeWidth="3" strokeLinecap="round" opacity=".8">
        <path d="M52 138q-6 14 0 28" />
        <path d="M84 138q-6 18 0 38" />
        <path d="M116 138q-6 14 0 28" />
        <path d="M148 138q-6 18 0 38" />
      </g>
    </Svg>
  )
}

/** Lid and contents are addressable so the CTA scene can open the box. */
export const Toolbox = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <g data-box-items transform="translate(0 40)">
        <g transform="rotate(-10 62 100)">
          <rect x="56" y="52" width="12" height="66" rx="5" fill={f(p, 'steelV')} />
          <circle cx="62" cy="46" r="13" fill={f(p, 'steel')} />
          <circle cx="62" cy="46" r="5.5" fill="var(--tool-ink-lo)" opacity=".8" />
        </g>
        <rect x="98.5" y="26" width="3" height="40" fill={f(p, 'steelV')} />
        <rect x="92" y="62" width="16" height="48" rx="7" fill={f(p, 'inkV')} />
        <g transform="rotate(10 130 100)">
          <rect x="125" y="58" width="10" height="52" rx="4" fill={f(p, 'accV')} />
          <rect x="122" y="44" width="16" height="16" rx="3" fill={f(p, 'steelV')} />
          <path d="M122 44Q130 26 138 44Z" fill={f(p, 'inkV')} />
        </g>
      </g>
      <rect x="26" y="96" width="148" height="82" rx="12" fill={f(p, 'acc')} />
      <rect x="26" y="146" width="148" height="32" rx="12" fill="var(--tool-accent-lo)" opacity=".35" />
      <rect x="34" y="104" width="132" height="4" rx="2" fill="#fff" opacity=".45" />
      <rect x="90" y="92" width="20" height="18" rx="4" fill={f(p, 'steel')} />
      <g data-box-lid style={{ transformOrigin: '100px 96px', transformBox: 'view-box' }}>
        <path d="M70 70V58Q70 46 82 46H118Q130 46 130 58V70" fill="none" stroke={f(p, 'steelV')} strokeWidth="8" strokeLinecap="round" />
        <rect x="22" y="68" width="156" height="30" rx="10" fill={f(p, 'acc')} />
        <rect x="32" y="74" width="136" height="4" rx="2" fill="#fff" opacity=".5" />
        <rect x="90" y="88" width="20" height="14" rx="4" fill={f(p, 'steel')} />
      </g>
    </Svg>
  )
}

export const Hammer = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <g transform="rotate(-32 100 104)">
        <rect x="91" y="64" width="18" height="128" rx="8" fill={f(p, 'accV')} />
        <rect x="46" y="30" width="100" height="38" rx="7" fill={f(p, 'steel')} />
        <path d="M46 36Q24 38 16 66L46 62Z" fill={f(p, 'steel')} />
        <rect x="134" y="30" width="16" height="38" rx="5" fill="var(--tool-steel-lo)" opacity=".6" />
        <rect x="56" y="36" width="70" height="4" rx="2" fill="#fff" opacity=".6" />
      </g>
    </Svg>
  )
}

export const Brush = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <g transform="rotate(24 100 104)">
        <path d="M91 18Q100 10 109 18L113 96H87Z" fill={f(p, 'accV')} />
        <rect x="82" y="96" width="36" height="30" rx="4" fill={f(p, 'steelV')} />
        <path d="M86 106h28M86 116h28" stroke="var(--tool-steel-lo)" strokeWidth="1.5" />
        <path d="M82 126H118Q126 168 114 190Q100 198 86 190Q74 168 82 126Z" fill={f(p, 'inkV')} />
      </g>
    </Svg>
  )
}

export const Trowel = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <g transform="rotate(-12 100 110)">
        <path d="M100 190L26 140Q100 118 174 140Z" fill="var(--tool-steel-mid)" />
        <path d="M100 190L26 140L100 150Z" fill="var(--tool-steel-lo)" opacity=".55" />
        <path d="M44 138Q100 124 156 138" stroke="#fff" strokeWidth="3.5" fill="none" opacity=".75" strokeLinecap="round" />
        <path d="M100 142V112" stroke="var(--tool-steel-lo)" strokeWidth="9" strokeLinecap="round" />
        <rect x="62" y="68" width="76" height="26" rx="13" fill={f(p, 'acc')} />
        <rect x="74" y="74" width="52" height="4" rx="2" fill="#fff" opacity=".55" />
        <rect x="90" y="92" width="20" height="24" rx="6" fill={f(p, 'steelV')} />
      </g>
    </Svg>
  )
}

/** Hex bolt, front-on. Spun by the intro scene while the wrench "turns" it. */
export const Bolt = ({ className }) => {
  const p = useId().replace(/:/g, '')
  return (
    <Svg className={className} p={p}>
      <polygon points="100,16 170,58 170,142 100,184 30,142 30,58" fill={f(p, 'steel')} stroke="var(--tool-steel-lo)" strokeWidth="2" />
      <polygon points="100,16 170,58 100,100 30,58" fill="#fff" opacity=".28" />
      <circle cx="100" cy="100" r="40" fill={f(p, 'white')} stroke="var(--tool-steel-lo)" strokeWidth="2" />
      <circle cx="100" cy="100" r="22" fill={f(p, 'steel')} />
      <circle cx="100" cy="100" r="9" fill="var(--tool-ink-mid)" />
    </Svg>
  )
}

export const TOOLS = {
  wrench: Wrench,
  drill: Drill,
  roller: Roller,
  bulb: Bulb,
  pipe: Pipe,
  ac: AC,
  toolbox: Toolbox,
  hammer: Hammer,
  brush: Brush,
  trowel: Trowel,
  bolt: Bolt,
}

/** <Tool name="drill" className=... /> */
export const Tool = ({ name, className }) => {
  const C = TOOLS[name] || Wrench
  return <C className={className} />
}

export default Tool
