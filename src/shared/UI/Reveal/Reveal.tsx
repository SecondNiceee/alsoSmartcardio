'use client'

import React, { FC, ReactNode, useRef, useCallback, useEffect, useState } from 'react'
import './Reveal.scss'

import { CHARACTER } from './models/CharacterEnum'
import { useRevealObserver } from '@/shared/providers/RevealProvider/RevealProvider'

type DivProps = JSX.IntrinsicElements['div']

interface IReveal extends DivProps {
  children?: ReactNode
  character: CHARACTER
  className?: string
  start?: boolean
}

const Reveal: FC<IReveal> = ({ children, character, className = '', start, ...props }) => {
  const [isRendered, setIsRendered] = useState<boolean>(false)
  const revealRef = useRef<HTMLDivElement>(null)
  const observer = useRevealObserver()

  const addFunction = useCallback(() => {
    if (isRendered) return
    setIsRendered(true)

    switch (character) {
      case CHARACTER.UPDOWN:
        revealRef.current?.classList.add('upDown')
        break
      case CHARACTER.DOWNUP:
        revealRef.current?.classList.add('downUp')
        break
      case CHARACTER.LEFT:
        revealRef.current?.classList.add('left')
        break
      case CHARACTER.RIGHT:
        revealRef.current?.classList.add('right')
        break
      default:
        break
    }
  }, [character, isRendered])

  const handleReveal = useCallback(() => {
    addFunction()
  }, [addFunction])

  useEffect(() => {
    const el = revealRef.current

    if (!el || !observer) return

    // Если start = true, анимируем сразу
    if (start && !isRendered) {
      addFunction()
    }

    // Если ещё не анимирован — добавляем наблюдение
    if (!isRendered) {
      el.addEventListener('reveal-visible', handleReveal)
      observer.observe(el)
    }

    return () => {
      if (el && observer) {
        observer.unobserve(el)
        el.removeEventListener('reveal-visible', handleReveal)
      }
    }
  }, [observer, isRendered, start, handleReveal, addFunction])

  return (
    <div className={`${className} reveal-base`} ref={revealRef} {...props}>
      {children}
    </div>
  )
}

export default Reveal