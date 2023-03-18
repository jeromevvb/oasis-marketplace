import { Flex, Spacer } from "@chakra-ui/react";
import Card from "@/components/common/Card/card";

export default function Explore() {
  return (
    <>
      <Flex bg={"background.color"}>
        <Card />
        <Spacer />
        <Card />
        <Spacer />
        <Card />
      </Flex>
    </>
  );
}
