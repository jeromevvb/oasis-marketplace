import { Flex } from "@chakra-ui/react";
import ExploreSection from "@/components/Sections/ExploreSection";
import HeadData from "@/components/Head";

export default function Explore() {
  return (
    <>
    <HeadData
        title={"Explore | Oasis Marketplace"} />
      {/* Container for whole page */}
      <Flex bg={"gray.800"} h={{ md: "100vh" }}>
        {/* Explore Content */}
        <ExploreSection />
      </Flex>
    </>
  );
}
