import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import './ProfileCard.css'

export interface ProfileCardProps {
  avatarUrl: string
  innerGradient?: string
  behindGlowEnabled?: boolean
  behindGlowColor?: string
  className?: string
  enableTilt?: boolean
  name?: string
  title?: string
  handle?: string
  status?: string
  contactText?: string
  showUserInfo?: boolean
  onContactClick?: () => void
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export default function ProfileCard({
  avatarUrl,
  innerGradient = 'linear-gradient(145deg, rgba(15, 23, 42, .9), rgba(30, 41, 59, .7))',
  behindGlowEnabled = true,
  behindGlowColor = 'rgba(37, 99, 235, .35)',
  className = '',
  enableTilt = true,
  name = '',
  title = '',
  handle = '',
  status = '',
  contactText = '',
  showUserInfo = true,
  onContactClick,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card || !enableTilt) return

    const onPointerMove = (event: PointerEvent) => {
      const bounds = card.getBoundingClientRect()
      const x = clamp((event.clientX - bounds.left) / bounds.width, 0, 1)
      const y = clamp((event.clientY - bounds.top) / bounds.height, 0, 1)
      card.style.setProperty('--rotate-x', `${(0.5 - y) * 10}deg`)
      card.style.setProperty('--rotate-y', `${(x - 0.5) * 10}deg`)
      card.style.setProperty('--pointer-x', `${x * 100}%`)
      card.style.setProperty('--pointer-y', `${y * 100}%`)
    }
    const reset = () => {
      card.style.setProperty('--rotate-x', '0deg')
      card.style.setProperty('--rotate-y', '0deg')
      card.style.setProperty('--pointer-x', '50%')
      card.style.setProperty('--pointer-y', '50%')
    }
    card.addEventListener('pointermove', onPointerMove)
    card.addEventListener('pointerleave', reset)
    return () => {
      card.removeEventListener('pointermove', onPointerMove)
      card.removeEventListener('pointerleave', reset)
    }
  }, [enableTilt])

  return (
    <div
      className={`pc-card-wrapper ${className}`.trim()}
      style={{ '--behind-glow-color': behindGlowColor, '--inner-gradient': innerGradient } as CSSProperties}
    >
      {behindGlowEnabled && <div className="pc-behind" />}
      <article ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <img className="pc-avatar" src={avatarUrl} alt={`${name} portrait`} loading="lazy" />
          <div className="pc-details"><h3>{name}</h3><p>{title}</p></div>
          {showUserInfo && (
            <div className="pc-user-info">
              <div className="pc-user-details"><img src={avatarUrl} alt="" /><div><strong>@{handle}</strong><span>{status}</span></div></div>
              <button className="pc-contact-btn" type="button" onClick={onContactClick}>{contactText}</button>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
