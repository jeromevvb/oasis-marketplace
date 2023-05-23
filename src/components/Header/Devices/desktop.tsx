import Link from 'next/link';
import {
  Box,
  Flex,
  Stack,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import { HeaderProps, Links } from "../";

/* Function for Header Options */
export function DesktopSubNav(props: HeaderProps) {

  const { name, href } = props;

  return (
    <>
      <Link
        href={`${href}`}>
        <Stack direction={'row'} align={'center'}>
          <Box
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}>
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
          <Box
            key={link.name}
            p={2}
            fontSize={'lg'}
            fontWeight={'bold'}
            color={'white'}
            _hover={{
            textDecoration: 'none',
            color: 'brown'}}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link href={`${link.href}`}>
                <Text>{link.name}</Text>
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
          
