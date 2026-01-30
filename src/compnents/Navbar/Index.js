import React from 'react';
import styled, { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { Link as LinkR } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Education from '../Education/Index';
import Skills from '../Skills/Index';
import Experience from '../../Experience/Index';
import Projects from '../../Projects';
import { FaGithub } from "react-icons/fa";

const Nav = styled.div`
  background: rgba(25, 25, 36, 0.75);
  backdrop-filter: blur(12px);

  height: ${({ shrink }) => (shrink ? "64px" : "80px")};
  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  transition: all 0.3s ease-in-out;
`;



const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.25s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    bottom: -6px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:hover::after {
    width: 100%;
  }
`;


const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: 10px 22px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;

  color: ${({ theme }) => theme.white};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primary},
    #a855f7
  );

  box-shadow: 0 8px 20px rgba(132, 59, 206, 0.45);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 12px 32px rgba(168, 85, 247, 0.55);
  }
`;



const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;

  padding: 24px 40px;
  background: rgba(25, 25, 36, 0.95);
  backdrop-filter: blur(10px);

  border-radius: 0 0 24px 24px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);

  transition: all 0.4s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-120%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;


const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [shrink, setShrink] = React.useState(false);
  
  const theme = useTheme();

  // Function to handle scrolling to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth',
    
       });
      setOpen(false);
    }
  };


  

React.useEffect(() => {
  const handleScroll = () => {
    setShrink(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <Nav shrink={shrink}>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#" onClick={() => scrollToSection('hero')}>
            About
          </NavLink>
          <NavLink href="#" onClick={() => scrollToSection('skills')}>
            Skills
          </NavLink>
          <NavLink href="#" onClick={() => scrollToSection('experience')}>
            Experience
          </NavLink>
          <NavLink href="#" onClick={() => scrollToSection('projects')}>
            Projects
          </NavLink>
          <NavLink href="#" onClick={() => scrollToSection('education')}>
            Education
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton
            href="https://github.com/raviteja7893055964"
            target="_blank"
          >
            <FaGithub size={18} />
GitHub Profile
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks
            href="#"
            onClick={() => {
              scrollToSection('hero');
            }}
          >
            About
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#"
            onClick={() => {
              scrollToSection('skills');
            }}
          >
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#"
            onClick={() => {
              scrollToSection('experience');
            }}
          >
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#"
            onClick={() => {
              scrollToSection('projects');
            }}
          >
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks
            href="#"
            onClick={() => {
              scrollToSection('education');
            }}
          >
            Education
          </MobileMenuLinks>
          <GitHubButton
            style={{
              padding: '10px 16px',
              background: `${theme.primary}`,
              color: 'white',
              width: 'max-content',
            }}
            href="/"
            target="_blank"
          >
            GitHub Profile
          </GitHubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;