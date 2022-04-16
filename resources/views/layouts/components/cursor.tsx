import { useEffect, useRef } from 'react'
import { UI } from '@store'
import { css } from '@emotion/css'

function Cursor() {
  const cursorType = UI((state) => state.cursor)

  const cursor: any = useRef<HTMLDivElement>(null)
  const cursor2: any = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`
    cursor.current.style.top = `${clientY}px`
    cursor2.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0px)`
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const MainCursor = css`
    position: fixed;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    transition: all 0.1s ease-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    transform-origin: center;
    z-index: 90;
    background-color: #fff;
    mix-blend-mode: normal;
    &.pointer {
      /* transform-origin: center; */
      /* transform: translate(-50%, -50%) scale(5); */
    }
    &.logo {
      height: 80px;
      width: 80px;
      background-color: #fff;
      mix-blend-mode: difference;
      transition-duration: 250ms;
    }
    &.go {
      height: 57px;
      width: 57px;
      background: url(/cursor/Cursor.png);
      mix-blend-mode: normal;
      box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 1199.98px) {
      display: none;
    }
  `

  const CursorBig = css`
    top: -20px;
    left: -20px;

    border-radius: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 90;
    height: 40px;
    width: 40px;
    transition: all 0.3s ease-out;
    will-change: width, height, transform, border;
    background-color: rgba(0, 0, 0, 0.2);
    border: 1px solid #fff;
    opacity: 0.7;
    transition-duration: 250ms;
    &.active {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    @media (max-width: 1199.98px) {
      display: none;
    }
  `

  return (
    <div>
      <div className={`${MainCursor} ${cursorType}`} ref={cursor} />
      <div
        ref={cursor2}
        className={`${CursorBig} ${cursorType ? 'active' : ''}`}
      />
    </div>
  )
}

export default Cursor
