import {
  Button,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import Card from "@/components/common/Card/card";

export default function Main() {
  
  return (
    <>
      {/*👇 Stacking of content on main page */}
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg={"background.color"}>
        
        {/* Container for text and buttons */}
        <Flex p={8} flex={1} align={"center"} justify={"center"} >

          {/* Stacking */}
          <Stack spacing={6} w={"full"} maxW={"lg"} >

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
              
                <Button
                  as={'a'}
                  href={"/create"}
                  rounded={"full"}
                  bg={"navbar.marketplace"}
                  color={"white"}
                  width={"fit"}
                  _hover={{
                    bg: "blue.500"}}>
                  Create Now
                </Button>

              <Button
                  as={'a'}
                  rounded={"full"}
                  href={"/explore"}
                  bg={"#C26D80"}
                  width={"fit"}
                  color={"white"}
                  _hover={{ bg: "#F54970" }}>
                  Explore NFTs
                </Button>

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
