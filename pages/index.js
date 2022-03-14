import Head from 'next/head'
import HeroSection from '../components/core/HeroSection/HeroSection';
import Shortner from '../components/core/Shortner/Shortner';
import Footer from '../components/core/Footer/Footer';
import Features from '../components/core/Features/Features';
import dynamic from 'next/dynamic';
import ShortenedLinkProvider from '../context/ShortenedLinksContext';
import GlobalSpinnerProvider from '../context/globalSpinnerContext';
import themes from './themes';
import { ThemeProvider } from '@emotion/react';
import '../shared/styles';


const Navbar = dynamic(
  () => {
    return import('../components/core/Navbar/Navbar')
  },{
    ssr:false
  }
) 

const Home = () => (
  <>
  <ThemeProvider theme={themes}>
  <GlobalSpinnerProvider>
   <ShortenedLinkProvider>
    <Navbar />
    <HeroSection />
    <Shortner />
    <Features />
    <Footer />
    </ShortenedLinkProvider>
    </GlobalSpinnerProvider>
    </ThemeProvider>
  </>
)

export default Home
