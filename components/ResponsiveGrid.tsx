import { Grid } from '@chakra-ui/core'
import styled from './Styled'

const ResponsiveGrid = styled(Grid)`
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export default ResponsiveGrid
