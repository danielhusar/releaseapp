import styled from './Styled'

const Main = styled.main`
  display: grid;
  grid-template-columns: [left-gutter] 1fr [content] 12fr [right-gutter] 1fr;
  max-width: 960px;
  margin: 0 auto;
`

export default Main
