import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import {chakra, VisuallyHidden} from '@chakra-ui/react';

/* Social Media Buttons */
const SocialButton = ({children, label, href}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    /* Button */
    <chakra.button
      bg={'whiteAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'gray.500'
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Icons() {
  return (
    <>
      {/* Twitter */}
      <SocialButton label={'Twitter'} href={''}>
        <FaTwitter />
      </SocialButton>
      {/* YouTube */}
      <SocialButton label={'YouTube'} href={''}>
        <FaYoutube />
      </SocialButton>
      {/* Instagram */}
      <SocialButton label={'Instagram'} href={''}>
        <FaInstagram />
      </SocialButton>
    </>
  )
}