import styled from './Styled'

const Spacer = styled.div<{ size: number }>`
  height: ${({ size }) => size * 10}px;
`

export default Spacer
