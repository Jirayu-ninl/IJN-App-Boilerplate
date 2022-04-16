import { css } from '@emotion/css'
import Color from 'views/theme/color'

export const Header = css`
  /* background-color: grey; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
`

export const HeaderContainer = css`
  position: absolute;
  width: 1440px;
  padding: 0 0 24px 0;
  z-index: 5;
  & h1 {
    font-size: 83px;
    font-weight: bold;
  }
  @media (max-width: 1439.98px) {
    width: 100%;
    padding: 0 24px 24px 24px;
    & h1 {
      font-size: 64px;
    }
  }
  @media (max-width: 1199.98px) {
    & h1 {
      font-size: 48px;
    }
  }
  @media (max-width: 991.98px) {
    & h1 {
      font-size: 36px;
    }
  }
  @media (max-width: 767.98px) {
    & h1 {
      font-size: 32px;
    }
  }
`

export const HeaderFade = css`
  z-index: 3;
  position: absolute;
  background: linear-gradient(
    ${Color.background[1] + '00, ' + Color.background[1] + 'FF'}
  );
  height: 20vh;
  width: 100%;
  @media (max-width: 479.98px) {
    height: 40vh;
  }
`

export const Tags = css`
  text-transform: uppercase;
  z-index: 5;
  & button {
    border: 1px solid white;
    padding: 0 18px;
    border-radius: 3px;
    transition-duration: 350ms;
  }
  & button:nth-child(n):not(:first-child) {
    margin-left: 16px;
  }
  & button:hover,
  button:first-child {
    border: 1px solid ${Color.primary[0]};
    background-color: ${Color.primary[0]};
    color: black;
    transition-duration: 150ms;
  }
  @media (max-width: 1199.98px) {
    & button {
      font-size: 12px;
      padding: 0 8px;
    }
    & button:nth-child(n):not(:first-child) {
      margin-left: 4px;
    }
  }
  @media (max-width: 479.98px) {
    & button {
      font-size: 10px;
    }
  }
`
