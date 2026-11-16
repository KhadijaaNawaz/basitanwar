import React from 'react'

/**
 * Shared SVG lighting for every tool. Rendered once per page; tools refer to
 * it by id (see Svg in Tools.js).
 *
 * `tool-lit` turns a flat silhouette into a lit, rounded object: the shape's
 * alpha is blurred into a height map, then lit by a soft key light (top-left)
 * for diffuse shading plus a tight specular highlight. It is pure GPU maths:
 * no images, no network.
 *
 * Tune: `stdDeviation` = how rounded the edges are, `surfaceScale` = depth,
 * `specularExponent` = glossiness (higher = tighter, shinier), azimuth/elevation = light direction.
 */
export default function ToolDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="tool-lit" x="-8%" y="-8%" width="116%" height="116%" colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.6" result="h" />
          <feDiffuseLighting in="h" surfaceScale="2.6" diffuseConstant="1.18" lightingColor="#fff" result="diff">
            <feDistantLight azimuth="225" elevation="52" />
          </feDiffuseLighting>
          <feComposite in="SourceGraphic" in2="diff" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="shaded" />
          <feSpecularLighting in="h" surfaceScale="3" specularConstant="0.8" specularExponent="26" lightingColor="#fff" result="spec">
            <feDistantLight azimuth="225" elevation="48" />
          </feSpecularLighting>
          <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
          <feComposite in="shaded" in2="specIn" operator="arithmetic" k1="0" k2="1" k3="0.9" k4="0" result="lit" />
          <feComposite in="lit" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id="tool-soft" x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
    </svg>
  )
}
