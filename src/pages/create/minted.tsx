import Link from "next/link";
import { Box, Heading, Button, Stack } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Card from "@/components/Common/Card";

/* Prop */

const Data = {
  name: "Tripping Duck",
};

export default function Minted() {
  return (
    // 👇 Container for whole page
    <Box
      textAlign={"center"}
      py={10}
      px={6}
      color={"white"}>
      {/* Circle with Tick Icon */}
      <CheckCircleIcon
        boxSize={"50px"}
        color={"blue.500"} />
      {/* Result title */}
      <Heading
        as={"h2"}
        size={"xl"}
        mt={6}
        mb={2}>
        You have successfully Minted "{Data.name}"
      </Heading>
      {/* Stacking of Card */}
      <Stack
        spacing={4}
        mt={"5"}
        align={"center"}
        justify={"center"}>
        {/* Card Example */}
        <Card />
      </Stack>
      {/* Stacking of Buttons */}
      <Stack
        direction={"row"}
        spacing={5}
        mt={"8"}
        align={"center"}
        justify={"center"}>
        {/* Return to Home Page Button */}
        <Link href={"/"}>
          <Button
            size={"lg"}
            rounded={"lg"}
            bg={"pink.400"}
            w={"fit"}
            _hover={{ bg: "yellow.500" }}>
            Return to Main Page
          </Button>
        </Link>
        {/* Create New NFT Button */}
        <Link href={"/create"}>
          <Button
            size={"lg"}
            rounded={"lg"}
            bg={"blue.500"}
            w={"fit"}
            _hover={{ bg: "yellow.500" }}>
            Create New NFT
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
