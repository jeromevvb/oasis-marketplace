import Link from "next/link";
import { ChangeEvent } from "react";
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

interface MintProps {
  nameValue: string | number | undefined;
  priceValue: string;
  copyValue: string;
  Loading: boolean | undefined;
  MintButtonOnClick: () => void | Promise<void>;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCopyChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MintSection(props: MintProps) {

  const {
    MintButtonOnClick,
    onInputChange,
    onPriceChange,
    onCopyChange,
    Loading,
    nameValue,
    priceValue,
    copyValue } = props;

  return (
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
                <FormControl id={"Name"} isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type={"text"}
                    placeholder={'Ex: Tripping Duck'}
                    _placeholder={{ color: 'gray.400' }}
                    value={nameValue}
                    onChange={onInputChange}
                    _hover={{ borderColor: 'cyan.600' }} />
                </FormControl>             
                {/* Copies */}
                <FormControl id={"Copies"} isRequired>
                  <FormLabel>Copies</FormLabel>
                  <NumberInput max={100} min={1} >
                  <NumberInputField
                    onChange={onCopyChange}
                    value={copyValue}
                    _hover={{ borderColor: 'cyan.600' }} />
                  <NumberInputStepper>
                    <NumberIncrementStepper color={'white'}/>
                    <NumberDecrementStepper color={'white'}/>
                  </NumberInputStepper>
                  </NumberInput>
                </FormControl>              
                {/* Price */}
                <FormControl id={"Price"} isRequired >
                  <FormLabel>Price</FormLabel>
                  {/* Container for input and currency */}
                  <Flex justify={'center'} align={'center'}>
                  <Input
                    type={'number'}
                    _hover={{ borderColor: 'cyan.600' }}
                    value={priceValue}
                    onChange={onPriceChange}/>
                    <Text ml={'5'}>ETH</Text>
                  </Flex>
                </FormControl>
                {/* Stacking of Buttons */}
                <Stack spacing={10} pt={2}>             
                  {/* Container for Buttons */}
                  <Flex align={'center'} justify={'center'}>
                    <Link href={'/create/mint'}>
                      <Button
                        loadingText={"Minting"}
                        size={"lg"}
                        bg={'pink.400'}
                        color={'white'}
                        isLoading={Loading}
                        onClick={MintButtonOnClick}
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
    </>
  )
}