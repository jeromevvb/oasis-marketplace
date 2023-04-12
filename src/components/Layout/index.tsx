import { Container } from "@chakra-ui/react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
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