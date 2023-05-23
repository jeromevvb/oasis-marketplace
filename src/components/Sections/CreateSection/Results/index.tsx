import Link from 'next/link';
import {
  Box,
  Button,
  Heading,
  Image,
  Stack
} from '@chakra-ui/react';

interface ResultsProps {
  name: string;
  URL: string;
  onClick: () => void | Promise<void>;
  }

/* Elements for Results */
export default function Results(props: ResultsProps) {

  const { name, URL, onClick } = props;

  /* Function that checks if onClick is a valid function */
  const isClickable = typeof onClick === 'function';
  
  return (
    <>
      {/* Container for whole page  */}
      <Box textAlign="center" color={'white'}>
        {/* Result title */}
        <Heading as="h2" size="xl" pt={6} mb={2}>
          Results for: "{name}"
        </Heading>
        {/* Stacking of Image */}
        <Stack
          spacing={4}
          mt={'5'}
          align={'center'}
          justify={'center'}>
          {/* Image */}
          <Image
            src={URL}
            alt={name}
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
              onClick={onClick}
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