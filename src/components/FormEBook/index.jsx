import { Box, Button, Divider, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { useState } from "react";
import globais from "../../Globais";

const initialErrors = {
  name: '',
  mail: '',
  phone: '',
  branch: ''
}

export default function FormEBook () {
  const [nameClient, setNameClient] = useState()
  const [mailClient, setMailClient] = useState()
  const [phoneClient, setPhoneClient] = useState()
  const [branchClient, setBranchClient] = useState()
  const [valids, setValids] = useState(initialErrors)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const middleScreenH = 'calc((100vh - 400px) / 2)'
  const middleScreenW = 'calc((100vw - 350px) / 2)'

  const checkInputs = () => {
    let errors = {}

    if(nameClient === '' || nameClient === undefined) {
      errors = { ...errors, name: 'O Nome deve ser preenchido' }
    }

    if(mailClient === '' || mailClient === undefined) {
      errors = { ...errors, mail: 'O E-Mail informado não é válido' }
    }

    if(!String(mailClient).includes('@') || !String(mailClient).includes('.com')) {
      errors = { ...errors, mail: 'O E-Mail informado não é válido' }
    }

    console.log(phoneClient);
    if(phoneClient === '' || phoneClient === undefined) {
      errors = { ...errors, phone: 'O Celular deve ser informado' }
    }

    if(branchClient === '' || branchClient === undefined) {
      errors = { ...errors, branch: 'A Empresa deve ser informado' }
    }

    if(JSON.stringify(errors) !== '{}') {
      setValids(errors)
      return false
    }

    setValids(initialErrors)
    return true
  }

  const onResetForm = () => {
    setNameClient('')
    setMailClient('')
    setPhoneClient('')
    setBranchClient('')
  }

  const onCloseModal = () => {
    onClose()
    onResetForm()
  }

  const onSubmit = () => {
    if(!checkInputs()) return null
    onOpen()
  }

  return (
    <Flex
      position="absolute"
      right={{base: middleScreenW, md: "50px", lg: "50px"}}
      top={{base: "46vh", md: middleScreenH, lg: middleScreenH}}
      zIndex="10"
    >
      <Box
        className="shadowBoxForm"
        bgColor={globais.primaryColor}
        height={{base: "400px", md: "450px", lg: "420px"}}
        width={{base: "350px", md: "350px", lg: "320px"}}
        borderRadius="20px"
        padding="10px"
      >
        <Box
          h="100%"
          w="100%"
          borderRadius="15px"
          border="3px solid #4ADE80"
          padding="5px"
        >
          <FormControl
            color="white"
            className="Montserrat"
          >
            <VStack justify="center" >
              <FormLabel
                fontSize={{base: "14px", md: "14px", lg: "16px"}}
                fontWeight="bold"
                textAlign="center"
                className="textSmall"
                pt={{md: "10px", lg: "5px"}}
              >
                Faça download dos nossos E-Books
              </FormLabel>
              <Divider
                w="100%"
                h="1px"
                bgColor={globais.secondaryColor}
              />
              <Text
                textAlign="center"
                fontSize={{base: "12px", md: "14px", lg: "12px"}}
              >
                Basta preencher os campos abaixo para receber GRATUITAMENTE em seu e-mail:
              </Text>
              <FormControl
                w="90%"
                isInvalid={!!valids.name}
              >
                <Text
                  fontSize={{base: "12px", md: "14px", lg: "14px"}}
                >Nome Completo:</Text>
                <Input
                  value={nameClient}
                  onChange={val => setNameClient(val.target.value)}
                  type="text"
                  variant="filled"
                  color="black"
                  placeholder="Wesley Coelho Ribeiro"
                  _focus={{
                    bgColor: globais.lightPrimaryColor
                  }}
                />
              </FormControl>
              <FormControl
                w="90%"
                isInvalid={!!valids.mail}
              >
                <Text
                  fontSize={{base: "12px", md: "14px", lg: "14px"}}
                >E-Mail:</Text>
                <Input
                  value={mailClient}
                  onChange={val => setMailClient(val.target.value)}
                  type="email"
                  variant="filled"
                  color="black"
                  placeholder="wesleyribeiro123@gmail.com"
                  _focus={{
                    bgColor: globais.lightPrimaryColor
                  }}
                />
              </FormControl>
              <FormControl
                w="90%"
                isInvalid={!!valids.phone}
              >
                <Text
                  fontSize={{base: "12px", md: "14px", lg: "14px"}}
                >Celular:</Text>
                <Input
                  value={phoneClient}
                  onChange={val => setPhoneClient(val.target.value)}
                  type="tel"
                  variant="filled"
                  color="black"
                  placeholder="(62) 9 9207-6671"
                  _focus={{
                    bgColor: globais.lightPrimaryColor
                  }}
                />
              </FormControl>
              <FormControl
                w="90%"
                isInvalid={!!valids.branch}
              >
                <Text
                  fontSize={{base: "12px", md: "14px", lg: "14px"}}
                >Empresa:</Text>
                <Input
                  value={branchClient}
                  onChange={val => setBranchClient(val.target.value)}
                  type="text"
                  variant="filled"
                  color="black"
                  placeholder="Tractian"
                  _focus={{
                    bgColor: globais.lightPrimaryColor
                  }}
                />
              </FormControl>
              <Button
                size="md"
                borderRadius="10px"
                bgColor={globais.secondaryColor}
                color={globais.primaryColor}
                px="70px"
                _hover={{
                  bgColor: globais.darkSecondaryColor
                }}
                onClick={onSubmit}
              >
                Solicitar E-Book
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          bgColor={globais.darkPrimaryColor}
          color="white"
          border="3px solid #4ADE80"
        >
          <Box
            border="1px solid #4ADE80"
            borderRadius="3px"
            margin="5px"
          >
            <ModalHeader textAlign="center">
              TRACTIAN - Agradecimento
            </ModalHeader>
            <ModalBody>
              <Text textAlign="center">
                Obrigado {nameClient}, os seus E-Books serão enviados por e-mail!
              </Text>
            </ModalBody>
            <ModalFooter justifyContent="center">
              <Button
                bgColor="red.600"
                _hover={{
                  bgColor: 'red.300'
                }}
                onClick={onCloseModal}
              >
                Fechar
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </Flex>
  )
}