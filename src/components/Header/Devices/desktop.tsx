import {
  Box,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";

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

  /* Connect Wallet Options */
export function DesktopSubNav(props: Header) {

  const { name, href, subLabel } = props;

  return (
      
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: 'navbar.marketplace' }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'brown' }}
              fontWeight={500}>
              {name}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
          </Flex>
        </Stack>
      </Link>
    );
  };

export default function DesktopNav() {

  const { isOpen } = useDisclosure();

  return (
    <>  
      {/* Stacking */}
      <Stack direction={'row'} spacing={4}>
        {/* Options */}
        {Links.map((link) => (
        <Box key={link.name}>
          <Popover trigger={'hover'} placement={'bottom-start'} >
            <PopoverTrigger>
              <Link
                p={2}
                href={link.href}
                fontSize={'lg'}
                fontWeight={'bold'}
                color={'white'}
                _hover={{
                  textDecoration: 'none',
                  color: 'brown'}}>
                  {link.name}
                </Link>
              </PopoverTrigger>
              {link.children && (
                <PopoverContent
                color={'white'}
                border={0}
                boxShadow={'xl'}
                bg={'gray.700'}
                p={4}
                rounded={'xl'}
                  minW={'sm'}>
                <Stack>
                  {link.children.map((child) => (
                    <DesktopSubNav key={child.name} {...child} />
                  ))}
                </Stack>
              </PopoverContent>)}
          </Popover>
        </Box>))}   
      </Stack> 
    </>
  );
};
          
