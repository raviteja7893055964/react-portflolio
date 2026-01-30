import React from 'react'
import styled from "styled-components";
import { Bio } from '../../data/Constants';
import Typewriter from "typewriter-effect";
import Image from "../../Images/Teja.jpg";
import { Outlet } from 'react-router-dom';



export const HeroContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(132, 59, 206, 0.08),
    ${({ theme }) => theme.card_light}
  );
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 96%, 0 100%);

  @media (max-width: 960px) {
    padding: 80px 16px;
  }
  @media (max-width: 640px) {
    padding: 60px 16px;
  }
`;


export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 52px;
  line-height: 1.2;
  color: ${({ theme }) => theme.text_primary};

  span {
    background: linear-gradient(135deg, #a855f7, #ec4899);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 38px;
  }
`;


const TextLoop = styled.div`
  font-weight: 500;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  padding-left: 6px;
`;


const SubTitle = styled.div`
  font-size: 19px;
  line-height: 32px;
  margin-bottom: 40px;
  max-width: 520px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;


const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 36px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  background: linear-gradient(135deg, #843bce, #a855f7);
  box-shadow: 0 10px 30px rgba(132, 59, 206, 0.45);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 14px 40px rgba(168, 85, 247, 0.6);
  }

  @media (max-width: 640px) {
    font-size: 15px;
    padding: 12px 28px;
  }
`;


const Img = styled.img`
  width: 100%;
  max-width: 380px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};

  box-shadow: 0 0 40px rgba(132, 59, 206, 0.45);
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 60px rgba(168, 85, 247, 0.65);
  }

  @media (max-width: 640px) {
    max-width: 260px;
  }
`;


const HeroBgAnimation = styled.div`
    width:600px;
    height: 500px;
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer id="hero">
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer >
          <HeroLeftContainer id="Left" >
          <Title>
  Hi, I am <br /> <span>{Bio.name}</span>
</Title>
          <TextLoop>
            I am a <Span>
            <Typewriter 
            options={{
              strings: Bio.roles,
              autoStart: true,
              loop: true,
          }}/>
            </Span>
        </TextLoop>
        <SubTitle>{Bio.description}</SubTitle>
        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>

          </HeroLeftContainer>
          <HeroRightContainer id="Right">
          <Img src={Image} alt="image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer> 
    <Outlet/>
      
       </div>
       
  )
}

export default Hero; 