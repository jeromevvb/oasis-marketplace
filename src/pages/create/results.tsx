import {Box, Heading, Button, Stack , Link, Image} from '@chakra-ui/react';
import { CheckCircleIcon} from '@chakra-ui/icons';

const resultsData = {
  name: 'Giant Orange R2-D2',
  imageURL:
    'https://cdn.vox-cdn.com/thumbor/ZhcG52NMDih4r3konjA8PMCtQ6w=/0x0:1536x1024/1820x1213/filters:focal(380x186:624x430):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71723386/WesAndersonStarWars.0.jpeg',
};

export default function Results() {

  return (

    // 👇 Container for whole page 
    <Box textAlign="center" py={10} px={6} bg={'background.color'} color={'white'}>
      
      {/* Circle with Tick Icon */}
      <CheckCircleIcon boxSize={'50px'} color={'blue.500'} />

      {/* Result title */}
      <Heading as="h2" size="xl" mt={6} mb={2}>
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
          w={{base: '200', sm: '500', md: '600'}}
          h={{base: '200', sm: '300', md: '400'}}/>
      </Stack>
      
      {/* Stacking of Buttons */}
      <Stack
        direction={'row'}
        spacing={5}
        mt={'8'}
        align={'center'}
        justify={'center'}>
        
        {/* Try Again Button */}
        <Link href={'/create'} _hover={{decoration: 'none'}}>
          <Button
            size={'lg'}
            rounded={'lg'}
            bg={'navbar.marketplace'}
            width={'100%'}
            _hover={{bg: 'blue.500'}}>
            Try Again
          </Button>
        </Link>
        
        {/* Mint Button */}
        <Link href={'/mint'} _hover={{decoration: 'none'}}>
          <Button
            size={'lg'}
            rounded={'lg'}
            bg={'#C26D80'}
            width={'100%'}
            _hover={{bg: '#F54970'}}>
          Mint
          </Button>
        </Link>
        
      </Stack>
    </Box>
  );
}