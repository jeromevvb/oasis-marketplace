import Link from "next/link";
import Card from "@/components/Common/Card";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
       {/*Stacking of content on main page */}
       <Stack
          minH={"100vh"}
          direction={{ base: "column", md: "row" }}
          bg={"gray.800"}>
          {/* Container for text and buttons */}
          <Flex
            p={8}
            flex={1}
            align={"center"}
            justify={"center"}>
            {/* Stacking */}
            <Stack
              spacing={6}
              w={"full"}
              maxW={"lg"}>
              {/* Main Heading */}
              <Heading
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                color={"white"}>
                Create Customized NFTs Now Using AI.
              </Heading>
              {/* Text */}
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                color={"white"}>
                Digital marketplace for non-fungible tokens (NFTs)
              </Text>
              {/* Stacking of Buttons */}
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}>
                {/* Buttons */}
                <Link href={"/create"}>
                  <Button
                    rounded={"full"}
                    bg={"pink.400"}
                    color={"white"}
                    width={"100%"}
                    _hover={{ bg: "yellow.500" }}>
                    Create Now
                  </Button>
                </Link>
                <Link href={"/explore"}>
                  <Button
                    rounded={"full"}
                    bg={"blue.500"}
                    width={"100%"}
                    color={"white"}
                    _hover={{ bg: "yellow.500" }}>
                    Explore NFTs
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          {/* Container for Card */}
          <Flex flex={1}>
            {/* Card */}
            <Card
            name={"Tripping Duck"}
            URL={"https://images-platform.99static.com/pULAgn-AED8QzzPGS40V0GCDOEk=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/130/130378/attachment_130378088"}
            price={"14.900"} />
          </Flex>
        </Stack>
    </>
  )
}