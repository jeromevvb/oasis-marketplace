import Link from 'next/link';
import { useState } from 'react';
import Form from './form';
import { Badge, Box, Button, Flex, Heading, Image, Stack } from '@chakra-ui/react';

/* Example of Data from API */
export const resultsData = {
  name: 'Tripping Duck',
  imageURL:
    'https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088',
};

export default function Create() {

    /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
    /* State for results */
  const [results, setResults] = useState([])
    /* State for example badge */
  const [exampleBadge, setExampleBadge] = useState()
  
    /* HandleClick function */
  const handleClick = () => {
    setIsLoading(status => !status);
    setResults([...results])}

  /* Components for Results */
  
//   {/* Container for whole page  */ }
//   <Box textAlign="center" py={10} px={6} color={'white'}>
//   {/* Result title */}
//   <Heading as="h2" size="xl" mt={6} mb={2}>
//     Results for: "{resultsData.name}"
//   </Heading>
//   {/* Stacking of Image */}
//   <Stack
//     spacing={4}
//     mt={'5'}
//     align={'center'}
//     justify={'center'}>
//     {/* Image */}
//     <Image
//       src={resultsData.imageURL}
//       alt={resultsData.name}
//       w={{ base: '200', sm: '500', md: '600' }}
//       h={{ base: '200', sm: '300', md: '400' }} />
//   </Stack>
//   {/* Stacking of Buttons */}
//   <Stack
//     direction={'row'}
//     spacing={5}
//     mt={'8'}
//     align={'center'}
//     justify={'center'}>
//     {/* Try Again Button */}
//     <Link href={'/create'}>
//       <Button
//         size={'lg'}
//         rounded={'lg'}
//         bg={'pink.400'}
//         width={'fit'}
//         _hover={{ bg: 'yellow.500' }}>
//         Try Again
//       </Button>
//     </Link>
//     {/* Mint Button */}
//     <Link href={'/create/mint'}>
//       <Button
//         size={'lg'}
//         rounded={'lg'}
//         bg={'blue.500'}
//         width={'fit'}
//         _hover={{ bg: 'yellow.500' }}>
//         Mint
//       </Button>
//     </Link>
//   </Stack>
// </Box>



  return (
    <>
      {/* Container for whole page */}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        color={'white'}>       
        {/* Stacking of content */}
        <Stack
          spacing={7}
          h={{base: '100%', md: '100%' }}
          w={{base: '85%', md: '100%'}}
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
          <Form />
          {/* Stacking of Button */}
          <Stack spacing={6}>
            <Button
              bg={'pink.400'}
              color={'white'}
              isLoading={isLoading}
              loadingText={'Creating'}
              onClick={handleClick}
              _hover={{bg: 'yellow.500'}}>
              Create
            </Button>
          </Stack>
          <Badge
            rounded={"full"}
            bg={'blue.500'}
            variant={'solid'}
            color={'white'}>
            Tripping Duck
          </Badge>
        </Stack>
      </Flex>
    </>
  );
}

