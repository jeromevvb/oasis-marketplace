import { Flex, Stack } from "@chakra-ui/react";
import Card from "@/components/common/Card/card";

export default function Explore() {
  return (
    <>
      {/*👇 Container for whole page */}
      <Flex bg={'background.color'} h={{ md: '100vh' }} >

        {/* Stacking */}
        <Stack direction={{ base: 'column', md: 'row' }}>
          
          {/* Card 1 */}
          <Card />
          
          {/* Card 2 */}
          <Card />
          
          {/* Card 3 */}
          <Card />

        </Stack>
      </Flex>
    </>
  );
}
