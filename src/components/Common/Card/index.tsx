import { Badge, Box, Flex, Image, } from '@chakra-ui/react';

/* Example of Card Data */

export const cardData = {
  name: 'Tripping Duck',
  imageURL:
    'https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088',
  price: '14.900',
  rating: 4.2,
  numReviews: 34,
};

export default function Card() {
  return (
    <>
      {/* Container for whole card */}
      <Flex
        p={30}
        w="full"
        alignItems="center"
        justify="center">
        {/* Container for card content */}
        <Box
          bg={'blue.700'}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {/* Image */}
          <Image
            src={cardData.imageURL}
            alt={`Picture of ${cardData.name}`}
            roundedTop="lg" />
          {/* Container for Texts and Badge */}
          <Box p="6">
            {/* Container for Badge */}
            <Flex align="baseline">
              {/* "New" Badge */}
              {(<Badge
                  rounded="full"
                  px="2"
                  fontSize="0.8em"
                  colorScheme="red">
                  New
                </Badge>)}
            </Flex>
            {/* Container for Name */}
            <Flex
              mt="1"
              justify="space-between"
              alignContent="center"
              color={'white'}>
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {cardData.name}
              </Box>
            </Flex>
            {/* Container for Price and Currency */}
            <Flex
              justify="space-between"
              align="center"
              color={'white'}>
              {/* Container for Price */}
              <Box fontSize="2xl">
              {cardData.price}
              </Box>
              {/* Container for currency */}
              <Box as="span" fontSize="lg" >
                ETH
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
