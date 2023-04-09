import Link from "next/link";
import { Box, Heading, Button, Stack, Image } from '@chakra-ui/react';

// 👇 Example of Data set from API 
const resultsData = {
  name: 'Tripping Duck',
  imageURL:
    'https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088',
};

export default function Results() {

  return (
    // 👇 Container for whole page 
    <Box textAlign="center" py={10} px={6} bg={'background.color'} color={'white'}>
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
        <Link href={'/create'}>
          <Button
            size={'lg'}
            rounded={'lg'}
            bg={'button.primary'}
            width={'fit'}
            _hover={{bg: 'button.primaryHover'}}>
            Try Again
          </Button>  
          </Link>
        {/* Mint Button */}  
        <Link href={'/create/mint'}>
          <Button
            size={'lg'}
            rounded={'lg'}
            bg={'button.secondary'}
            width={'fit'}
            _hover={{bg: 'button.secondaryHover'}}>
            Mint
          </Button>
          </Link>
      </Stack>
    </Box>
  );
}