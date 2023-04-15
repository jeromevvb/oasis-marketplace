import Link from 'next/link';
import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack
} from '@chakra-ui/react';

/* Example of Data from API */
export const resultsData = {
  name: 'Tripping Duck',
  imageURL:
    'https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088',
};
  
export default function Create() {

  /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
   /* State for badge */
  const [inputValue, setInputValue] = useState("")
  /* State for create section and results */
  const [create, setCreate] = useState(true);
  const [showResults, setShowResults] = useState(false);

  /* handleInputValue function for Badge */
  const handleInputValue = () => {
    const newValue = 'Tripping Duck';
    setInputValue(prevValue => prevValue + newValue);
  };

  /* HandleClick function for Create Button */
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
      setCreate(false);
      setShowResults(true);
    }, 2000)
  }

  /* HandleCreatePage function for Try Again Button */
  const handleCreatePage = () => {
    setShowResults(false);
    setCreate(true);
  }

/* Elements for Results */
function Results() {
  
  return (
    <>
      {/* Container for whole page  */}
      <Box textAlign="center" color={'white'}>
        {/* Result title */}
        <Heading as="h2" size="xl" pt={6} mb={2}>
          Results for: "{resultsData.name}"
        </Heading>
        {/* Stacking of Image */}
        <Stack
          spacing={4}
          mt={'5'}
          align={'center'}
          justify={'center'}>
          {/* Image */}
          <Image
            src={resultsData.imageURL}
            alt={resultsData.name}
            w={{ base: '200', sm: '500', md: '600' }}
            h={{ base: '200', sm: '300', md: '400' }} />
        </Stack>
        {/* Stacking of Buttons */}
        <Stack
          direction={'row'}
          spacing={5}
          mt={'8'}
          pb={'8'}
          align={'center'}
          justify={'center'}>
          {/* Try Again Button */}
          <Link href={'/create'}>
            <Button
              onClick={handleCreatePage}
              size={'lg'}
              rounded={'lg'}
              bg={'pink.400'}
              width={'fit'}
              _hover={{ bg: 'yellow.500' }}>
              Try Again
            </Button>
          </Link>
          {/* Mint Button */}
          <Link href={'/create/mint'}>
            <Button
              size={'lg'}
              rounded={'lg'}
              bg={'blue.500'}
              width={'fit'}
              _hover={{ bg: 'yellow.500' }}>
              Mint
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  )
}

  /* Elements for Create */
  return (
    <>
      {showResults && <Results />}
      {create && (
        <>
          {/* Container for whole page */ }
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            color={'white'}>
            {/* Stacking of content */}
            <Stack
              spacing={7}
              h={{ base: '100%', md: '100%' }}
              w={{ base: '85%', md: '100%' }}
              maxW={'lg'}
              bg={'gray.700'}
              rounded={'xl'}
              boxShadow={'lg'}
              align={'center'}
              p={9}>
              {/* Heading */}
              <Heading
                lineHeight={1.1}
                fontSize={{ base: '2xl', md: '3xl' }}
                textAlign={'center'}>
                Create Your NFT
              </Heading>
              {/* Form */}
              <FormControl>
                <Input
                  type={'text'}
                  size={{ base: 'md', md: 'lg' }}
                  borderColor={'white'}
                  placeholder="Type what you want to create..."
                  _placeholder={{ color: 'gray.400' }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  _hover={{ borderColor: 'cyan.600' }} />
              </FormControl>
              {/* Stacking of Button */}
              <Stack spacing={6}>
                <Button
                  bg={'pink.400'}
                  color={'white'}
                  isLoading={isLoading}
                  loadingText={'Creating'}
                  onClick={handleClick}
                  _hover={{ bg: 'yellow.500' }}>
                  Create
                </Button>
              </Stack>
              <Button
                bg={'blue.500'}
                onClick={handleInputValue}
                rounded={"full"}
                variant={'solid'}
                color={'none'}
                _hover={{
                  bg: 'yellow.500'}}>
                Tripping Duck
              </Button>
            </Stack>
          </Flex>
        </> )}
    </>
  );
}
