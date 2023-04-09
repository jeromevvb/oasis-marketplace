import Link from 'next/link';
import { HStack, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <>
      {/* Stacking */}
      <HStack spacing={8} align={'center'}>
        {/* Logo */}
        <Link href={'/'}>
          <Image
          id={'logo'}
          src={'/logo2.png'}
          alt={'logo'}
          width={'12rem'}
          height={'100%'}
          _hover={{ opacity: '50%' }}/>
        </Link>
      </HStack>
    </>
  )
}