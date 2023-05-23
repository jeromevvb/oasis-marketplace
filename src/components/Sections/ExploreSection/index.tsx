import { Stack } from "@chakra-ui/react";
import Card from "@/components/Common/Card";

export default function ExploreSection() {
  return (
    <>
      {/* Stacking of Cards */}
      <Stack direction={{ base: "column", md: "row" }}>
        {/* Tripping Duck */}
        <Card
          name={"Fancy Eagle"}
          URL={"https://i.etsystatic.com/30251997/r/il/55b4ea/3715516762/il_570xN.3715516762_ao3a.jpg"}
          price={"18.700"} />
        {/* Pizza Rabbit */}
        <Card
          name={"Pizza Rabbit"}
          URL={"https://i.pinimg.com/736x/10/d2/31/10d2313d6f321909c93b61c332371d0a.jpg"}
          price={"20.000"}/>
        {/* Tense Zombie */}
        <Card 
          name={"Tense Zombie"}
          URL={"https://www.seoclerk.com/pics/001/304/405/e4ac00883fbd1fbf6ea19e7e6e3e8d60.jpg"}
          price={"15.000"} />
      </Stack>
    </>
  )
}