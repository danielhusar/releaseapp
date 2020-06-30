import React from 'react'
import { css, Global } from '@emotion/core'

const styles = css`
  html,
  body {
    min-height: 100%;
    height: 100%;
    background: #eee;
    color: #555555;
    font-size: 16px;
  }

  img,
  video {
    max-width: 100%;
  }

  a {
    color: #9c27b0;
  }

  #__next {
    height: 100%;
  }
`

export default function GlobalStyles() {
  return <Global styles={styles} />
}
