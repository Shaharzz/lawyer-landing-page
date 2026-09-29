import { useEffect, useRef } from 'react'
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl'

type AuroraProps = {
  colorStops?: [string, string, string]
  blend?: number
  amplitude?: number
  speed?: number
}

const vertex = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`

const fragment = `#version 300 es
precision highp float;
uniform float uTime, uAmplitude, uBlend;
uniform vec3 uColors[3];
uniform vec2 uResolution;
out vec4 fragColor;
float noise(vec2 p) {
  return sin(p.x * 2.1 + sin(p.y * 1.7 + uTime)) * 0.5 +
    sin(p.y * 3.2 - uTime * 0.7) * 0.3;
}
void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float wave = noise(vec2(uv.x * 2.0, uv.y * 1.4)) * 0.22 * uAmplitude;
  float band = smoothstep(0.62 - uBlend, 0.62 + uBlend, uv.y + wave);
  vec3 color = mix(mix(uColors[0], uColors[1], uv.x), uColors[2], uv.x * uv.x);
  fragColor = vec4(color * band, band * 0.82);
}`

export default function Aurora({
  colorStops = ['#0f172a', '#1e3a8a', '#334155'],
  blend = 0.5,
  amplitude = 1,
  speed = 0.6,
}: AuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uBlend: { value: blend },
        uColors: { value: colorStops.map((stop) => { const color = new Color(stop); return [color.r, color.g, color.b] }) },
        uResolution: { value: [container.offsetWidth, container.offsetHeight] },
      },
    })
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })
    const resize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      program.uniforms.uResolution.value = [container.offsetWidth, container.offsetHeight]
    }
    let frame = 0
    const render = (time: number) => {
      program.uniforms.uTime.value = time * 0.001 * speed
      renderer.render({ scene: mesh })
      frame = requestAnimationFrame(render)
    }
    container.appendChild(gl.canvas)
    window.addEventListener('resize', resize)
    resize()
    frame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      gl.canvas.remove()
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [amplitude, blend, colorStops, speed])

  return <div className="aurora-container" ref={containerRef} aria-hidden="true" />
}
