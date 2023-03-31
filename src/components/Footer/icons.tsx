import { ReactNode } from 'react';
import { chakra, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

/* Social Media Button Props */
interface SocialProps {
  children: ReactNode;
  label: string;
  href: string;
  _hover: object;
}

/* Social Media Buttons */
export function SocialButton(props: SocialProps) {

  const { children, label, href, _hover } = props;

  return (

    <chakra.button
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      bg={'whiteAlpha.100'}
      rounded={'full'}
      w={8}
      h={8}
      transition={'background 0.3s ease'}
      _hover={_hover}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Icons() {
  
  return (
    <>
      
      {/* Twitter */}
      <SocialButton
        label={'Twitter'}
        href={'/'}
        _hover={{
          bg: 'background.logo',
          color: 'logo.twitter'}}>
        <FaTwitter  />
      </SocialButton>

      {/* YouTube */}
      <SocialButton
        label={'YouTube'} 
        href={'/'} 
        _hover={{
          bg: 'background.logo',
          color: 'logo.youtube'}}>
        <FaYoutube />
      </SocialButton>

      {/* Instagram */}
      <SocialButton 
        label={'Instagram'} 
        href={'/'} 
        _hover={{
          bg: 'background.logo',
          color: 'logo.instagram'}}>
        <FaInstagram />
      </SocialButton>
    </>
  )
}