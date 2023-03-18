import {Box, Heading, Button, Stack , Link, Image} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Results() {

  return (
      <Box textAlign="center" py={10} px={6} bg={'background.color'}>
        <CheckCircleIcon boxSize={'50px'} color={'navbar.marketplace'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Results for "ABC"
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }}
          spacing={4}
          mt={'5'}
          align={'center'}
          justify={'center'}>
          <Image
            src=''
            alt='AI Generated Image'
            width={'300'}
            height={'200'} 
          />
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          mt={'8'}
          align={'center'}
          justify={'center'}>
          <Link href={'/create'}>
          <Button
            size={'lg'}
            rounded={'lg'}
            bg={'navbar.marketplace'}
            width={'100%'}
            _hover={{
            bg: 'blue.500'
            }}>
            Try Again
          </Button>
          </Link>
          <Link href={'/mint'}>
          <Button
            size={'lg'}
            rounded={'lg'}
            bg={'#C26D80'}
            width={'100%'}
            _hover={{
          bg: '#F54970'
          }}>
          Mint
          </Button>
          </Link>
          </Stack>
      </Box>
  );
}