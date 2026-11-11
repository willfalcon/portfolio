import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Mdhs from '@/components/Mdhs';
import M2l from '@/components/M2l';
import Skwahdle from '@/components/Skwahdle';
import ClientWork from '@/components/ClientWork';
import About from '@/components/About';
import Closing from '@/components/Closing';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <ClientWork />
        <Mdhs />
        <M2l />
        <Skwahdle />
        <About />
      </main>
      <Closing />
    </>
  );
}
