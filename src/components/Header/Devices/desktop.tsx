import {
  Box,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
} from "@chakra-ui/react";

/* 1. Header Props */

interface NavItem {
  name: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

/* 2. Object with Header options */

const Links: Array<NavItem> = [

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
    href: "../connect_wallet"
  }];

export default function DesktopNav() {

  return (
    <>
      {/* Stacking of Header */}
      <Stack direction={'row'} spacing={4}>
        {Links.map((link) => (
          <Box key={link.name}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
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
          </Popover>
        </Box>
        ))}
        
      </Stack>
    </>
  );
};