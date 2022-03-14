import Head from 'next/head'
import HeroSection from '../components/core/HeroSection/HeroSection';
import Shortner from '../components/core/Shortner/Shortner';
import Footer from '../components/core/Footer/Footer';
import Features from '../components/core/Features/Features';
import dynamic from 'next/dynamic';
import ShortenedLinkProvider from '../context/ShortenedLinksContext';
import GlobalSpinnerProvider from '../context/globalSpinnerContext';
const Navbar = dynamic(
  () => {
    return import('../components/core/Navbar/Navbar')
  },{
    ssr:false
  }
) 

const Home = () => (
  <>
  <GlobalSpinnerProvider>
   <ShortenedLinkProvider>
    <Navbar />
    <HeroSection />
    <Shortner />
    <Features />
    <Footer />
    </ShortenedLinkProvider>
    </GlobalSpinnerProvider>
  </>
)

export default Home
