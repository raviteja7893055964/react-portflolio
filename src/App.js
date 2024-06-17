
import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes';
//import Navbar from './compnents/Navbar';
import Hero from './compnents/Herosection/Index.js';
import Experience from './Experience/Index.js';
import Projects from './Projects/index.js';
import Navbar from './compnents/Navbar/Index.js';
import Skills from './compnents/Skills/Index.js';
import Education from './compnents/Education/Index.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './Contact/Index.js';
import Footer from './Footer/Footer.js';
import {Routes, Route} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`


const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
        <Router>
        <Navbar />
        <Body>
        <Hero />
        <Wrapper>
         <Skills />
              <Experience/>
      </Wrapper>
<Projects />
    <Wrapper>
       <Education />
      </Wrapper>
<Wrapper>
       <Contact/>
      </Wrapper>
       <Footer/>
        </Body>
        </Router>
        <Outlet/>
      </ThemeProvider>
 );
}

export default App;
