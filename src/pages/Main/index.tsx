import { Button, Flex, Heading, Stack, Text, Link } from "@chakra-ui/react";
import Card from "@/components/common/Card/card";

export default function Main() {
  return (
    <>
      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        bg={"background.color"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}>
              <Text>Create Customized NFTs Now Using AI.</Text>
            </Heading>
            <Text fontSize={{ base: "lg", lg: "2xl" }} color={"gray.500"}>
              Digital marketplace for non-fungible tokens (NFTs)
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Link href={"/create"} _hover={{ textDecoration: "none" }}>
                <Button
                  rounded={"full"}
                  bg={"navbar.marketplace"}
                  width={"100%"}
                  _hover={{
                    bg: "blue.500",
                    shadow: "2xl",
                  }}
                >
                  Create Now
                </Button>
              </Link>
              <Link
                href={"/explore"}
                _hover={{
                  textDecoration: "none",
                  shadow: "2xl",
                }}
              >
                <Button
                  rounded={"full"}
                  bg={"#C26D80"}
                  width={"100%"}
                  _hover={{ bg: "#F54970" }}
                >
                  Explore NFTs
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Card />
        </Flex>
      </Stack>
    </>
  );
}
