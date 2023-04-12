import Head from "next/head";
import Link from "next/link";
import Card from "@/components/Common/Card";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oasis Marketplace</title>
        <meta
          name="description"
          content="Oasis Marketplace: AI NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <main>
        {/*👇 Stacking of content on main page */}
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
            {/* Card Example */}
            <Card />
          </Flex>
        </Stack>
      </main>
    </>
  );
}
