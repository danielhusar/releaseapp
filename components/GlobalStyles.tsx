import React from 'react'
import { css, Global } from '@emotion/core'

const styles = css`
  html,
  body {
    min-height: 100%;
    height: 100%;
  }

  img,
  video {
    max-width: 100%;
  }
`

export default function GlobalStyles() {
  return <Global styles={styles} />
}
