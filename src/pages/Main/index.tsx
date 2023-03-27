import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import Card from "@/components/common/Card/card";

export default function Main() {
  
  return (
    <>
      {/*👇 Stacking of content on Main Page */}
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg={"background.color"}>
        
        {/* Container for */}
        <Flex p={8} flex={1} align={"center"} justify={"center"}>

          {/* Stacking of Text and Card */}
          <Stack spacing={6} w={"full"} maxW={"lg"}>

            {/* Main Heading */}
            <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} color={'white'}>
              <Text>Create Customized NFTs Now Using AI.</Text>
            </Heading>

            {/* Text */}
            <Text fontSize={{ base: "lg", lg: "2xl" }} color={"navbar.marketplace"}>
              Digital marketplace for non-fungible tokens (NFTs)
            </Text>

            {/* Stacking of Buttons */}
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>

              {/* Buttons */}
              <Link href={"/create"} _hover={{ textDecoration: "none" }}>
                <Button
                  rounded={"full"}
                  bg={"navbar.marketplace"}
                  color={"white"}
                  width={"100%"}
                  _hover={{
                    bg: "blue.500",
                    shadow: "2xl" }}>
                  Create Now
                </Button>
              </Link>

              <Link
                href={"/explore"}
                _hover={{
                  textDecoration: "none",
                  shadow: "2xl" }}>
                <Button
                  rounded={"full"}
                  bg={"#C26D80"}
                  width={"100%"}
                  color={"white"}
                  _hover={{ bg: "#F54970" }}>
                  Explore NFTs
                </Button>
              </Link>

            </Stack>
          </Stack>
        </Flex>

        {/* Container for Card */}              
        <Flex flex={1}>
          {/* Card Example */}
          <Card />
        </Flex>
      </Stack>
    </>
  );
}
