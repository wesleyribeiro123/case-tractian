import { Box, Flex } from '@chakra-ui/react'
import { FormEBook, ImageCentral, NavBar, ReasonTractian } from '../components'

export default function Home() {
  return (
    <Box maxW="1440px" maxH="100vh">
      <Flex className="bgLeft">
        <NavBar />
        <ReasonTractian />
        <FormEBook />
        <ImageCentral />
      </Flex>
    </Box>
  )
}
