import {Box, Heading, Button, Stack} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Card from '@/components/common/Card/card';

/* Prop */

const Data = {
  name: "Tripping Duck"
}  

export default function Minted() {

  return (
    // 👇 Container for whole page 
    <Box
      textAlign="center"
      py={10}
      px={6}
      bg={'background.color'}
      color={'white'}>      
      {/* Circle with Tick Icon */}
      <CheckCircleIcon boxSize={'50px'} color={'blue.500'} />
      {/* Result title */}
      <Heading 
        as="h2" size="xl" mt={6} mb={2}>
        You have successfully Minted "{Data.name}"
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
        {/* Return to Home Page Button */}
        <Button
          href={'../../main'}
          as={'a'}
          size={'lg'}
          rounded={'lg'}
          bg={'button.first'}
          w={'fit'}
          _hover={{bg: 'button.hoverFirst'}}>
          Return to Main Page
        </Button>        
        {/* Create New NFT Button */} 
        <Button
          as={'a'}
          href={'/create'}
          size={'lg'}
          rounded={'lg'}
          bg={'button.second'}
          w={'fit'}
          _hover={{bg: 'button.hoverSecond'}}>
          Create New NFT
        </Button>       
      </Stack>
    </Box>
  );
}