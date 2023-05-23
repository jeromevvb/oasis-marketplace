import { Badge, Box, Flex, Image, } from '@chakra-ui/react';

interface CardProps {
  name: string;
  URL: string;
  price: string;
}

export default function Card(props: CardProps) {

  const { name, URL, price } = props;

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
            src={URL}
            alt={`Picture of ${name}`}
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
                {name}
              </Box>
            </Flex>
            {/* Container for Price and Currency */}
            <Flex
              justify="space-between"
              align="center"
              color={'white'}>
              {/* Container for Price */}
              <Box fontSize="2xl">
              {price}
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
