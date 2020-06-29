import React from 'react'
import { Box, Text } from '@chakra-ui/core'

export interface IEnvironment {
  id: string
}

export default function Environment({ id }: IEnvironment) {
  return (
    <Box p="6" borderWidth="1px" overflow="hidden" display="flex" flexDirection="column" data-testid="document">
      <Text>{id}</Text>
    </Box>
  )
}
