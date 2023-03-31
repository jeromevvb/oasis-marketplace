import { Box, Stack, Link, Popover, PopoverTrigger } from "@chakra-ui/react";

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
    href: "../connect_wallet"
  }];

export default function DesktopNav() {
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
          </Popover>
        </Box>))}   
      </Stack> 
    </>
  );
};
          
