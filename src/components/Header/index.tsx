import Logo from "./logo"; 
import DesktopNav from "./Devices/desktop";
import MobileNav from "./Devices/mobile";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/*👇 Container for whole Header */} 
      <Box bg={'navbar.background'} px={4}>

        {/* Container for Header content */}
        <Flex h={16} align={'center'} justify={'space-between'}>

          {/* Logo */}
          <Logo />

          {/* Responsive Menu */}
          <IconButton
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            size={"md"}
            minW={0}
            color={"white"}
            bg={'none'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
              bg: 'none',
              opacity: '50%'}} />
          
          {/* Options on Desktop */}
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>

        </Flex>

        {/* Display of Menu Options for Mobile Devices */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} >
            <Collapse in={isOpen} animateOpacity>
              <MobileNav />
            </Collapse>
          </Box>
        ) : null}
        
      </Box>
    </>
  );
}
