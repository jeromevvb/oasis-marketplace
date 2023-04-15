import Link from "next/link";
import Card from "@/components/Common/Card";
import { useState } from 'react';
import { CheckCircleIcon } from "@chakra-ui/icons";
import { resultsData } from "..";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';

export default function Mint() {

  /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
  /* State for Minted Results and Create Section */
  const [Create, setCreate] = useState(true);
  const [showMinted, setShowMinted] = useState(false);
  
  /* HandleClick function for Mint Button */
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowMinted(true);
      setCreate(false);
    }, 2000)
  }

  /* Elements for Minted */
  function Minted() {
    return (
      <>
        {/* Container for whole page */}
        <Box
          textAlign={"center"}
          py={10}
          px={6}
          color={"white"}>
          {/* Circle with Tick Icon */}
          <CheckCircleIcon
            boxSize={"50px"}
            color={"blue.500"} />
          {/* Result title */}
          <Heading
            as={"h2"}
            size={"xl"}
            mt={6}
            mb={2}>
            You have successfully Minted "{resultsData.name}"
          </Heading>
          {/* Stacking of Card */}
          <Stack
            spacing={4}
            mt={"5"}
            align={"center"}
            justify={"center"}>
            {/* Card Example */}
            <Card />
          </Stack>
          {/* Stacking of Buttons */}
          <Stack
            direction={"row"}
            spacing={5}
            mt={"8"}
            align={"center"}
            justify={"center"}>
            {/* Return to Home Page Button */}
            <Link href={"/"}>
              <Button
                size={"lg"}
                rounded={"lg"}
                bg={"pink.400"}
                w={"fit"}
                _hover={{ bg: "yellow.500" }}>
                Return to Main Page
              </Button>
            </Link>
            {/* Create New NFT Button */}
            <Link href={"/create"}>
              <Button
                size={"lg"}
                rounded={"lg"}
                bg={"blue.500"}
                w={"fit"}
                _hover={{ bg: "yellow.500" }}>
                Create New NFT
              </Button>
            </Link>
          </Stack>
        </Box>
      </>  
    );
  }
  
  /* Elements for Mint */
  return (
    <>
      {showMinted && <Minted />}
      {Create && (
      <>
        {/* Container for whole page */ }
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={'background.color'}
          color={'white'}>       
          {/* General Stacking for whole content */}
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            {/* Stacking for Heading */}
            <Stack align={'center'}>
              {/* Heading */}
              <Heading fontSize={'4xl'} textAlign={'center'}>
              Mint Your NFT
              </Heading>
            </Stack>          
            {/* Container for Form */}
            <Box
              rounded={'lg'}
              bg={'gray.700'}
              boxShadow={'lg'}
              p={8}>            
              {/* Stacking for Form */}
              <Stack spacing={4}>
                {/* === Form === */}
                {/* Name */}
                <FormControl id="Name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    placeholder='Ex: "Tripping Duck"'
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'cyan.600' }} />
                </FormControl>             
                {/* Copies */}
                <FormControl id="Copies" isRequired>
                  <FormLabel>Copies</FormLabel>
                  <NumberInput max={100} min={1}>
                  <NumberInputField _hover={{borderColor: 'cyan.600'}} />
                  <NumberInputStepper>
                    <NumberIncrementStepper color={'white'}/>
                    <NumberDecrementStepper color={'white'}/>
                  </NumberInputStepper>
                  </NumberInput>
                </FormControl>              
                {/* Price */}
                <FormControl id="Price">
                  <FormLabel>Price</FormLabel>
                  {/* Container for input and currency */}
                  <Flex justify={'center'} align={'center'}>
                    <Input type='number' _hover={{ borderColor: 'cyan.600' }} />
                    <Text ml={'5'}>ETH</Text>
                  </Flex>
                </FormControl>
                {/* Stacking of Buttons */}
                <Stack spacing={10} pt={2}>             
                  {/* Container for Buttons */}
                  <Flex align={'center'} justify={'center'}>
                    <Link href={'/create/mint'}>
                      <Button
                        loadingText="Minting"
                        size="lg"
                        bg={'pink.400'}
                        color={'white'}
                        isLoading={isLoading}
                        onClick={handleClick}
                        w={'fit'}
                        _hover={{bg: 'yellow.500'}}>
                        Mint
                      </Button>
                    </Link>
                  </Flex>
                </Stack>              
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>)}
    </>
  )
}