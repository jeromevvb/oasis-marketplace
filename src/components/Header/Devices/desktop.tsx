import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import { HeaderProps, Links } from "../";

  /* Connect Wallet Options */
export function DesktopSubNav(props: HeaderProps) {

  const { name, href } = props;

  return (
    <>
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
    </>
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
                    <DesktopSubNav {...child} />
                  ))}
                </Stack>
              </PopoverContent>)}
          </Popover>
        </Box>))}   
      </Stack> 
    </>
  );
};
          
