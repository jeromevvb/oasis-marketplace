import Link from 'next/link';
import Card from "@/components/common/Card/card";
import { Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Main() {
  
  return (
    <>
        {/*👇 Stacking of content on main page */}
        <Stack
          minH={"100vh"}
          direction={{ base: "column", md: "row" }}
          bg={"background.color"}>        
          {/* Container for text and buttons */}
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            {/* Stacking */}
            <Stack spacing={6} w={"full"} maxW={"lg"} >
              {/* Main Heading */}
              <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} color={'white'}>
              Create Customized NFTs Now Using AI.
              </Heading>
              {/* Text */}
              <Text fontSize={{ base: "lg", lg: "2xl" }} color={"white"}>
              Digital marketplace for non-fungible tokens (NFTs)
              </Text>
              {/* Stacking of Buttons */}
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                {/* Buttons */}
                <Link href={"/create"}>
                  <Button
                    rounded={"full"}
                    bg={"button.primary"}
                    color={"white"}
                    width={"100%"}
                    _hover={{bg: "button.primaryHover"}}>
                    Create Now
                  </Button>
                </Link>
                <Link href={"/explore"}>
                  <Button
                    rounded={"full"}
                    bg={"button.secondary"}
                    width={"100%"}
                    color={"white"}
                    _hover={{ bg: "button.secondaryHover"}}>
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
