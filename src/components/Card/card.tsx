import {
  Flex,
  Box,
  Image,
  Badge,
  chakra,
  Tooltip,
} from '@chakra-ui/react';

const data = {
  isNew: true,
  imageURL:
    'https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088',
  name: 'Tripping Duck',
  price: '14.900',
  rating: 4.2,
  numReviews: 34,
};

export default function () {
  return (
    <>
      <Flex
        p={50}
        w="full"
        alignItems="center"
        justify="center">
      <Box
        bg={'blue.700'}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Image
          src={data.imageURL}
          alt={`Picture of ${data.name}`}
          roundedTop="lg"/>
        <Box p="6">
          <Flex align="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Flex>
          <Flex mt="1" justify="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>
          </Flex>
          <Flex justify="space-between" align="center">
            <Box fontSize="2xl" color={'navbar.oasis'}>
              {data.price}
              </Box>
              <Box as="span" color={'navbar.oasis'} fontSize="lg" >
                ETH
              </Box>
          </Flex>
        </Box>
      </Box>
      </Flex>
      </>
  );
}
