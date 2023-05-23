import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {

  const { children } = props;

  return (
    <>
      <Header />
      <Container maxW={'100vw'} bg={'gray.800'}>
        {children}
      </Container>
      <Footer />
    </>
  )
}