import styled, { CreateStyled } from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import theme from '~/lib/theme'

export default styled as CreateStyled<typeof theme>
export { css, keyframes }
