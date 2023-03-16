import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Link
} from '@chakra-ui/react';
import { Children } from 'react';


export default function Create() {
  
  const handleClick = () => {
    <Button
      isLoading
      loadingText={'Creating'}
      >
    </Button>
  }

  return (
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'background.color'}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={'gray.700'}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '2xl', md: '3xl' }}
          textAlign={'center'}>
          Create Your NFT 
        </Heading>
          <FormControl>
          <Input
            placeholder="Type what you want to create..."
            _placeholder={{ color: 'gray.500' }}
            type="text"/>
        </FormControl>
          <Stack spacing={6}>
            <Link
              href={'/create/results'}
              _hover={{
              textDecoration: 'none'
              }}>
              <Button
                bg={'navbar.marketplace'}
                color={'navbar.oasis'}
                _hover={{
                  bg: 'blue.500',}}
                onClick={handleClick}>
                Create
                </Button>
            </Link>
        </Stack>
      </Stack>
      </Flex>
      </>
  );
}

