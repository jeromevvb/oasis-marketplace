import { Flex, Spacer} from '@chakra-ui/react';
import Card from '@/components/Card/card';

export default function Explore () {
  return (
    <>
      <Flex bg={'background.color'}>
        <Card/>
        <Spacer />
        <Card/>
        <Spacer />
        <Card/>
      </Flex>
      </>
  )
}


