import Image from "next/image";
import {HStack, Link} from "@chakra-ui/react";

export default function Logo() {
  return (
    <>
      {/* Stacking */}
      <HStack spacing={8} align={'center'}>
        {/* Logo */}
        <Link href={'../main'} _hover={{ opacity: '50%' }}>
        <Image
          id={'logo'}
          src={'/../public/logo2.png'}
          alt={'logo'}
          width={'200'}
          height={'100'} />
        </Link>
      </HStack>
    </>
  )
}