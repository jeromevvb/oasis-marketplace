import { ReactNode } from 'react';
import { chakra, Link, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

/* Social Media Button Props */
interface SocialProps {
  children?: ReactNode;
  href: string;
  label: string;
  _hover: object;
}

/* Social Media Buttons */
export function SocialButton(props: SocialProps) {

  const { children, label, href, _hover } = props;

  return (
    <Link
      href={href}
      isExternal>
      <chakra.button
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
    </Link>
  );
};

export default function Icons() {
  
  return (
    <>      
      {/* Twitter */}
      <SocialButton
        label={'Twitter'}
        href={'https://www.twitter.com/'}
        _hover={{
          bg: 'background.logo',
          color: 'icon.twitter'}}>
        <FaTwitter  />
      </SocialButton>
      {/* YouTube */}
      <SocialButton
        label={'YouTube'} 
        href={'https://www.youtube.com/'} 
        _hover={{
          bg: 'background.logo',
          color: 'icon.youtube'}}>
        <FaYoutube />
      </SocialButton>
      {/* Instagram */}
      <SocialButton 
        label={'Instagram'} 
        href={'https://www.instagram.com/'} 
        _hover={{
          bg: 'background.logo',
          color: 'icon.instagram'}}>
        <FaInstagram />
      </SocialButton>
    </>
  )
}