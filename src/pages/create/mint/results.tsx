import {Box, Heading, Button, Stack} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Card from '@/components/common/Card/card';

const resultsData = {
  name: 'Tripping Duck'
};

export default function MintedNFT() {

  return (

    // 👇 Container for whole page 
    <Box textAlign="center" py={10} px={6} bg={'background.color'} color={'white'}>
      
      {/* Circle with Tick Icon */}
      <CheckCircleIcon boxSize={'50px'} color={'blue.500'} />

      {/* Result title */}
      <Heading as="h2" size="xl" mt={6} mb={2}>
          You have successfully Minted "{resultsData.name}"
      </Heading>
      
      {/* Stacking of Card */}
      <Stack 
        spacing={4}
        mt={'5'}
        align={'center'}
        justify={'center'}>
        
        {/* Card Example */}
        <Card />
      </Stack>
      
      {/* Stacking of Buttons */}
      <Stack
        direction={'row'}
        spacing={5}
        mt={'8'}
        align={'center'}
        justify={'center'}>
        
        {/* Home */}

        <Button
            href={'/main'}
            as={'a'}
            size={'lg'}
            rounded={'lg'}
            bg={'#C26D80'}
            w={'fit'}
            _hover={{bg: '#F54970'}}>
          Home
          </Button>
        
        {/* Create Button */}
        
        <Button
            as={'a'}
            href={'/create'}
            size={'lg'}
            rounded={'lg'}
            bg={'navbar.marketplace'}
            w={'fit'}
            _hover={{bg: 'blue.500'}}>
            Create New NFT
          </Button>
        
      </Stack>
    </Box>
  );
}