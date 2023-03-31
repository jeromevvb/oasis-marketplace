import Logo from "./logo"; 
import DesktopNav from "./Devices/desktop";
import MobileNav from "./Devices/mobile";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Collapse, Flex, IconButton, useDisclosure } from "@chakra-ui/react";

export default function Header() {

  const { isOpen, onOpen, onClose} = useDisclosure();
 
  return (
    <>
      {/*👇 Container for whole Header */}
      <Box bg={'navbar.background'} px={4}>
        {/* Container for Header content */}
        <Flex
          minH={16}
          justify={'space-between'}
          align={'center'}
          py={{ base: 2 }}
          px={{ base: 4 }}>
          {/* Logo */}
          <Logo />
          {/* Hamburger Icon */}
          <IconButton
            display={{ md: 'none' }}
            minW={0}
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Open Menu'}
            size={"md"}
            color={'white'}
            _hover={{
              bg: 'none',
              opacity: '50%'}} />
          {/* Options on Desktop */}
          <Flex justify={{ base: 'center', md: 'end' }} display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </Flex>
        
        {/* Display of Options on Mobile Devices */}
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </>
  );        
}
