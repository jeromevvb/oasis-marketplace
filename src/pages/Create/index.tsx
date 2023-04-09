import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import Form from './form';
import { useState } from 'react';

// 👇 Example of Data set from API 
const resultsData = {
  name: 'Tripping Duck',
  imageURL:
    'https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088',
};

export default function Create() {

    /* Loading State for button */
  const [isLoading, setIsLoading] = useState(false)
    /* State for results */
  const [results, setResults] = useState()
  
    /* HandleClick function */
  const handleClick = () => {
    setIsLoading(status => !status);
    setResults(result => result);
  }

  return (
    <>
      {/* Container for whole page */}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
          color={'white'}
          bg={'background.color'}>       
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
          {/* Stacking of Buttons */}
          <Stack spacing={6}>
            <Button
              as={'a'}
              href={'/create/results'}
              bg={'button.primary'}
              color={'navbar.oasis'}
              isLoading={isLoading}
              loadingText={'Creating'}
              onClick={handleClick}
              _hover={{bg: 'button.primaryHover'}}>
              Create
            </Button>
          </Stack>          
        </Stack>
        </Flex>
    </>
  );
}

