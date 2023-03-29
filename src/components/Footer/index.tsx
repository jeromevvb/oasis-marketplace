import Icons from './icons';
import Logo from '../Header/logo';
import {
  Box,
  Container,
  Stack,
  Text
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      {/* Main Container for Whole Footer */}
      <Box
        bg={'gray.900'}
        color={'white'}>
        {/* Container for Content */}
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>          
          {/* Logo */}
          <Logo />
          {/* Text */}
          <Text>© 2023 Oasis Marketplace. All rights reserved</Text>
          {/* Stacking of Icons */}
          <Stack direction={'row'} spacing={6}>            
            {/* Social Media Icons */}
            <Icons />
          </Stack>
        </Container>
      </Box>
    </>
  )
}