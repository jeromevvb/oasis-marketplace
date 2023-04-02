import { Collapse, Flex, Icon, Link, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

/* 1. Header Props */

interface Header {
  name: string;
  subLabel?: string;
  children?: Array<Header>;
  href?: string;
}

/* 2. Object with Header options */

const Links: Array<Header> = [

  {
    name: "Create",
    href: "../create"
  },

  {
    name: "Explore",
    href: "../explore"
  },

  {
    name: "Connect Wallet",
    children: [
      {
        name: 'WalletConnect',
        href: 'https://walletconnect.com/',
      },
      {
        name: 'MetaMask',
        href: 'https://metamask.io/',
      },
      {
        name: 'Coinbase Wallet',
        href: 'https://www.coinbase.com/wallet',
      },
      {
        name: 'Fortmatic',
        href: 'https://fortmatic.com/',
      },
    ],
  }];

/* 3. Rendering of Header Options */
export function NavLink(props: Header) {

  const { name, children, href, subLabel } = props;
  
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      {/* Stacking */}
      <Stack spacing={4} onClick={children && onToggle}>
        {/* Container */}
        <Flex
        py={2}
        as={Link}
        href={href}
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
          fontWeight={500}>  
          {/* Rendering */}   
          {children && children.map((child) => (
            <Link
              key={child.name} 
              rounded={'md'}
              p={2}
              href={child.href}
              _hover={{
                bg: 'navbar.marketplace',
                color: 'brown',
              textDecoration: "none"}}>
              {child.name}
            </Link>))}
        </Stack>   
        </Collapse>
      </Stack>
    </>
  );
};

/* 4. Rending of Options on Mobile Devices */
export default function MobileNav() {
  return (
    <>
      {/* Stack */} 
      <Stack
        bg={'navbar.background'}
        p={4}
        display={{ md: 'none' }}>
        {/* Render */} 
        {Links.map((link) => (
          <NavLink key={link.name} {...link} />))}
      </Stack>
    </>
  );
};