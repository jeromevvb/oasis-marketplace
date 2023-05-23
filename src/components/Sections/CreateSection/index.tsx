import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface CreateProps {
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  CreateButtonOnClick: () => void | Promise<void>;
  TextButtonOnClick: () => void | Promise<void>;
  Loading: boolean | undefined;
}

export default function CreateSection(props:CreateProps) {

  const { value, onChange, CreateButtonOnClick, TextButtonOnClick, Loading } = props

  return (
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
              value={value}
              onChange={onChange}
              _hover={{ borderColor: 'cyan.600' }} />
          </FormControl>
          {/* Stacking of Button */}
          <Stack spacing={6}>
            <Button
              bg={'pink.400'}
              color={'white'}
              isLoading={Loading}
              loadingText={'Creating'}
              onClick={CreateButtonOnClick}
              _hover={{ bg: 'yellow.500' }}>
              Create
            </Button>
          </Stack>
          <Button
            bg={'blue.500'}
            onClick={TextButtonOnClick}
            rounded={"full"}
            variant={'solid'}
            color={'none'}
            _hover={{
              bg: 'yellow.500'}}>
            Tripping Duck
          </Button>
        </Stack>
      </Flex>
    </>
  )
}