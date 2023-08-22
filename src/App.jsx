import './App.css'
import { ThemeProvider, createTheme } from '@mui/material';
import { NavbarWithMegaMenu } from './components/Navabr';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Platforms from './components/Platforms';
import Explore from './components/Explore';
import Services from './components/Services';
import Community from './components/Community';
import Articles from './components/Articles';
import Customers from './components/Customers';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { RatingWithComment } from './components/RatingWithComment';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useRef } from 'react';
function App() {
  const theme = createTheme({
  });
  const servicesRef = useRef(null);
  const articlesRef = useRef(null);
  const platformRef = useRef(null);

  const exploreRef = useRef(null);

  const communityRef = useRef(null);
  const contactRef = useRef(null);
  const FooterRef = useRef(null);




  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPpatforms= () => {
    platformRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToArticles = () => {
    articlesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToExplore = () => {
    exploreRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCommunity= () => {
    communityRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFooter= () => {
    FooterRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
     <ThemeProvider theme={theme}>
     <NavbarWithMegaMenu 
     scrollToContact= {scrollToContact}
     scrollToServices={scrollToServices}
     scrollToFooter = {scrollToFooter}/>


     <Hero 
     scrollToContact={scrollToContact}
    />
<div ref={platformRef}>
          <Platforms />
        </div>    
        <div ref={exploreRef}>
          <Explore />
        </div>
      <div ref={servicesRef} id="/services">
          <Services />
        </div>
        <div ref={communityRef}>
          <Community/>
        </div>       
        <div ref={contactRef} id="/contact">
          <Contact />
        </div>     
           <div ref={articlesRef} id="/articles">
          <Articles />
        </div>
      <Customers />
      <RatingWithComment />
      <div ref={FooterRef} id="/footer">
          <Footer/>
        </div>    </ThemeProvider>    </>
  )
}

export default App
