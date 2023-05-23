import Link from "next/link";
import { Collapse, Flex, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HeaderProps, Links } from "../";

/* Function for Header Options */

function NavLink(props: HeaderProps) {

  const { name, children, href } = props;
  
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Stacking */}
      <Stack spacing={4} onClick={children && onToggle}>
        <Link href={`${href}`}>
          {/* Container */}
          <Flex
          py={2}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none'}}>
            {/* Options */}
            <Text
              fontWeight={'bold'}
              fontSize={"lg"}
              px={2}
              py={1}
              color={'white'}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "brown"}}>
              {name}
            </Text>
            {/* Rendering */}
            {children && (
            <Icon
              as={ChevronDownIcon}
              color={'white'}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
              _hover={{color: 'brown'}} />)}
          </Flex>
        </Link>
        {/* Collapse */}
        <Collapse
          in={isOpen}
          style={{ marginTop: '0!important'}}
          animateOpacity>
          {/* Stack inside Menu */}  
          <Stack
            mt={2}
            pl={4}
            color={'white'}
            fontWeight={500}
            rounded={'md'}
            p={2}>  
            {/* Rendering */}   
            {children && children.map((child) => (
              <Link
                key={child.name} 
                href={`${child.href}`}>
                <Text
                  rounded={'md'}
                  p={2}
                  _hover={{
                  color: 'brown',
                  textDecoration: "none"}}>
                  {child.name}
                </Text>
              </Link>))}
          </Stack>   
        </Collapse>
      </Stack>
    </>
  );
};

/* Rending of Options on Mobile Devices */
export default function MobileNav() {
  return (
    <>
      {/* Stack */} 
      <Stack
        bg={'gray.800'}
        p={4}
        display={{ md: 'none' }}>
        {/* Render */} 
        {Links.map((link) => (
          <NavLink key={link.name} {...link} />))}
      </Stack>
    </>
  );
};