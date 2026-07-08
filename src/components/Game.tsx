import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import Ball from './Ball'
import './Game.css'

const SPEED          =30
const THRESHOLD      = 0.05
const FADE_ZONE      = 0.9
const BALL_SIZE      = 100
const BALL_RADIUS    = BALL_SIZE / 2
const DRAG_THRESHOLD = 200

const isTouch = window.matchMedia('(pointer: coarse)').matches

function Game() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  // ── Desktop state ──────────────────────────────────────
  const keysRef     = useRef<Set<string>>(new Set())
  const posRef      = useRef(0.5)
  const rotationRef = useRef(0)
  const rafRef      = useRef(0)
  const [pos,      setPos]      = useState(0.5)
  const [rotation, setRotation] = useState(0)

  // ── Touch state ────────────────────────────────────────
  const touchStartYRef = useRef<number | null>(null)
  const [dragY,      setDragY]      = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // ── Desktop: keyboard + rAF loop ──────────────────────
  useEffect(() => {
    if (isTouch) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        keysRef.current.add(e.key)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => keysRef.current.delete(e.key)

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    const tick = () => {
      const left  = keysRef.current.has('ArrowLeft')
      const right = keysRef.current.has('ArrowRight')
      const step     = SPEED / window.innerWidth
      const degPerPx = (180 / Math.PI) / BALL_RADIUS

      if (left && !right) {
        posRef.current      = Math.max(0, posRef.current - step)
        rotationRef.current -= SPEED * degPerPx
      }
      if (right && !left) {
        posRef.current      = Math.min(1, posRef.current + step)
        rotationRef.current += SPEED * degPerPx
      }

      setPos(posRef.current)
      setRotation(rotationRef.current)

      if (posRef.current <= THRESHOLD)      { navigate('/personal');     return }
      if (posRef.current >= 1 - THRESHOLD)  { navigate('/professional'); return }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      cancelAnimationFrame(rafRef.current)
    }
  }, [navigate])

  // ── Touch handlers ─────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartYRef.current === null) return
    const dy = e.touches[0].clientY - touchStartYRef.current
    setDragY(dy)
    if (dy < -DRAG_THRESHOLD) { navigate('/personal');     return }
    if (dy >  DRAG_THRESHOLD) { navigate('/professional'); return }
  }

  const handleTouchEnd = () => {
    touchStartYRef.current = null
    setIsDragging(false)
    setDragY(0)
  }

  // ── Derived values ─────────────────────────────────────
  const leftOpacity  = 0.2 + Math.max(0, 1 - pos / FADE_ZONE) * 0.8
  const rightOpacity = 0.2 + Math.max(0, 1 - (1 - pos) / FADE_ZONE) * 0.8
  const upProgress   = Math.max(0, Math.min(1, -dragY / DRAG_THRESHOLD))
  const downProgress = Math.max(0, Math.min(1,  dragY / DRAG_THRESHOLD))

  // ── Touch render ───────────────────────────────────────
  if (isTouch) {
    return (
      <div className="game">
        <div className="zone top touch-hint">
          <span style={{ opacity: 0.2 + upProgress * 0.8 }}>Personal</span>
        </div>

        <div
          className="zone middle touch-middle"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="touch-content">
            <ArrowUp size={22} className="touch-arrow up" />
            <div
              className="touch-ball"
              style={{
                transform: `translateY(${dragY}px)`,
                transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <Ball rotation={rotation} />
            </div>
            <span className="floor-greeting" style={{ opacity: 0.8 - downProgress * 5 }}>
              {t("Hello!", "Hola!")}
            </span>
            <ArrowDown size={22} className="touch-arrow down" />
          </div>
        </div>

        <div className="zone bottom touch-hint">
          <span style={{ opacity: 0.2 + downProgress * 0.8 }}>{t("Professional", "Profesional")}</span>
        </div>
      </div>
    )
  }

  // ── Desktop render ─────────────────────────────────────
  return (
    <div className="game">
      <div className="zone top" />

      <div className="zone middle">
        <span className="direction left"  style={{ opacity: leftOpacity }}>Personal</span>
        <span className="direction right" style={{ opacity: rightOpacity }}>{t("Professional", "Profesional")}</span>

        <div className="stage">
          <div className="hint-zone" style={{ bottom: `${2 * BALL_SIZE + 20}px` }}>
            <ArrowLeft size={20} className="hint-arrow hint-left" />
            <ArrowRight size={20} className="hint-arrow hint-right" />
          </div>
          <div
            className="figure-wrap"
            style={{ left: `calc(${pos * 100}% - ${BALL_RADIUS * 2}px)` }}
          >
            <Ball rotation={rotation} />
          </div>
          <div className="floor" />
        </div>
        <span className="floor-greeting">{t("Hello!", "Hola!")}</span>
      </div>

      <div className="zone bottom" />
    </div>
  )
}

export default Game
