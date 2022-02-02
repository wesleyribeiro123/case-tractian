import { Flex, Image } from "@chakra-ui/react";

export default function ImageCentral() {
  return (
    <Flex
      position="absolute"
      h="85vh"
      bottom="0"
      left="25%"
      zIndex="5"
      display={{base: 'none', md: 'none', lg: 'flex'}}
    >
      <Image
        src="/assets/admirando.png"
        alt="Imagem admirando"
      />
    </Flex>
  )
}