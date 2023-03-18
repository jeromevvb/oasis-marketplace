import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Link
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Mint() {

  const [isLoading, setIsLoading] = useState(false)
  
  const handleClick = () => {
    setIsLoading(status => !status)
  }

  return (
    <>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'background.color'}>
        
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Mint Your NFT
            </Heading>
          </Stack>
          
          <Box
          rounded={'lg'}
          bg={'gray.700'}
          boxShadow={'lg'}
          p={8}>
            
            <Stack spacing={4}>
              
              <FormControl id="Name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder='Ex: "Chilled Gorilla"'/>
              </FormControl>

              <FormControl id="Copies" isRequired>
                <FormLabel>Copies</FormLabel>
                <NumberInput max={100} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
              </FormControl>
              
              <FormControl id="Price">
                <FormLabel>Price</FormLabel>
                <Flex justify={'center'} align={'center'}>
                  <Input type='number' />
                  <Text ml={'5'}>ETH</Text>
                </Flex>
              </FormControl>
              
            <Stack spacing={10} pt={2}>
                <Link
                href={'/'}
                _hover={{
                  textDecoration: 'none'
                }}>
                  <Flex align={'center'} justify={'center'}>
                    <Button
                      loadingText="Minting"
                      size="lg"
                      bg={'navbar.marketplace'}
                      color={'white'}
                      isLoading={isLoading}
                      onClick={handleClick}
                      _hover={{
                      bg: 'blue.500',
                      }}>
                      Mint
                    </Button>
                  </Flex>
              </Link>
            </Stack>
              
          </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}