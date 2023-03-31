import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import Form from './form';
import {useState} from 'react';

export default function Create() {

  // 👇 Loading State and function for button
  const [isLoading, setIsLoading] = useState(false)
  
    // 👇 HandleClick function
  const handleClick = () => {
    setIsLoading(status => !status)
  }

  return (
    <>
      {/* 👇 Container for whole page */}
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'background.color'}
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

          {/* Stacking of Buttons */}
          <Stack spacing={6}>
            <Button
              as={'a'}
              href={'/create/results'}
              bg={'button.first'}
              color={'navbar.oasis'}
              isLoading={isLoading}
              loadingText={'Creating'}
              onClick={handleClick}
              _hover={{bg: 'button.hoverFirst'}}>
              Create
            </Button>
          </Stack>
          
        </Stack>
      </Flex>
    </>
  );
}

