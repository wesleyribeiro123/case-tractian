import { Box, Button, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import globais from "../../Globais";

export default function ReasonTractian () {
  return (
    <Flex
      height="calc(100vh - 80px)"
      flexDir="column"
      justify={{base: "start", md: "center", lg: "center"}}
      mt={{base: "80px"}}
    >
      <Flex color={globais.secondaryColor} fontSize="lg" className="textSmall Montserrat" ml="20px">
        <Text>
          Porque escolher a
        </Text>
        <Text color="white" ml="5px">
          TRACTIAN
        </Text>
        <Text>
        ?
        </Text>
      </Flex>
      <Flex color="white" className="textSmall" my={{base: "20px", md: "30px", lg: "30px"}} ml="25px">
        <UnorderedList>
          <ListItem>Manutenção Preditiva</ListItem>
          <ListItem>Monitoramento Online</ListItem>
          <ListItem>Setup Instantâneo</ListItem>
          <ListItem>Automações Industriais</ListItem>
        </UnorderedList>
      </Flex>
      <Flex ml="25px">
        <Button
          bgColor={globais.secondaryColor}
          color='white'
          borderRadius="30px"
          size="sm"
          _hover={{
            bgColor: globais.darkSecondaryColor
          }}
        >
          Falar com Especialista
        </Button>
      </Flex>
    </Flex>
  )
}