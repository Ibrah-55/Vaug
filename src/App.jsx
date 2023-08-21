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

function App() {
  const theme = createTheme({
  });
  
  return (
    <>
     <ThemeProvider theme={theme}>
     <Hero />
      <Platforms />
      <Explore />
      <Services />
      <Community />
      <Contact/>
      <Articles />
      <Customers />
      <RatingWithComment />
      <Footer />
    </ThemeProvider>    </>
  )
}

export default App
