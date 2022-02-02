import { Flex, Image, Link, Stack, Text, HStack, Icon, Drawer, useDisclosure, DrawerHeader, DrawerOverlay, DrawerBody, DrawerContent, Box } from "@chakra-ui/react"
import { MdMenu } from 'react-icons/md'
import globais from '../../Globais'

export default function NavBar () {
  const {isOpen, onOpen, onClose} = useDisclosure(false);

  return (
    <Flex
      position="absolute"
      top="5"
      w="100vw"
    >
      <Stack direction="row" w="100%">
        <Image
          src="/assets/Logo-Tractian.png"
          alt="Logo Tractian"
          position="absolute"
          left={{base: "20px", md: "40px", lg: "50px"}}
          w={{base: "150px", md: "250px", lg: "300px"}}
        />
        <Flex
          w="100%"
          justify="right"
          pr="20px"
          display={{base: "flex", md: "flex", lg: 'none'}}
        >
          <Icon
            color={globais.primaryColor}
            as={MdMenu}
            w="30px"
            h="30px"
            onClick={onOpen}
          />
        </Flex>
        <HStack
          display={{base: "none", md: 'none', lg: 'flex'}}
          justify="center"
          spacing="10"
          position="absolute"
          right="30px"
          h="40px"
        >
          {
            globais.menus.map((menu, index) => {
              return (
                <Link
                  id="animationMenu"
                  key={index}
                  borderBottom={
                    menu.active ? '3px solid #4ADE80' : 'none'
                  }
                  height={
                    menu.active ? '40px' : 'none'
                  }
                  _hover={{
                    textDecor: 'none',
                    borderBottom: '3px solid #4ADE80',
                  }}
                >
                  <Text
                    fontWeight="bold"
                    color={globais.primaryColor}
                  >{menu.label}</Text>
                </Link>
              )
            })
          }
        </HStack>
      </Stack>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="top"
      >
        <DrawerOverlay />
        <DrawerContent
          bgGradient="linear(to-r, #2149AF, #4ADE80)"
        >
          <Flex
            flexDir={{base: "column", md: "row"}}
            align="center"
          >
            <DrawerHeader>
              <Flex w="200px" h="50px" flexDir="column" justifyContent="center">
                <Image
                  src="/assets/Logo-Tractian.png"
                  alt="Logo Tractian"
                />
              </Flex>
            </DrawerHeader>
            <DrawerBody>
              <HStack
              justify="center"
              align="center"
              spacing="10"
              h="100%"
              mb={{base: "20px"}}
              >
                {
                  globais.menus.map((menu, index) => {
                    return (
                      <Link
                        key={index}
                        borderBottom={
                          menu.active ? '3px solid #0a276e' : 'none'
                        }
                      >
                        <Text
                          fontWeight="bold"
                          fontSize={{base: "sm", md: "md"}}
                          color={"white"}
                        >{menu.label}</Text>
                      </Link>
                    )
                  })
                }
              </HStack>
            </DrawerBody>
          </Flex>
        </DrawerContent>
      </Drawer>

    </Flex>
  )
}