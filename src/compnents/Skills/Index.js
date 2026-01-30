import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/Constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  position: relative;
  z-index: 1;
`;


const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 12px;

  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;



const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;


const Skill = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 28px 32px;
  border-radius: 20px;

  background: rgba(25, 25, 36, 0.75);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(132, 59, 206, 0.25);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);

  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 70px rgba(132, 59, 206, 0.45);
  }

  @media (max-width: 768px) {
    padding: 22px 26px;
  }
`;


const SkillTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 22px;
  color: ${({ theme }) => theme.text_primary};
`;


const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);

  transition: all 0.25s ease;

  &:hover {
    background: rgba(132, 59, 206, 0.25);
    transform: translateY(-2px);
  }
`;


const SkillImage = styled.img`
  width: 22px;
  height: 22px;
`;


const Skills = () => {
  return (
    <Container id="skills">
<Wrapper>
<Title>Skills</Title>
<Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
</Wrapper>
<SkillsContainer>
{skills.map((skill, index) => (
  <Skill key={index}>
    <SkillTitle>{skill.title}</SkillTitle>
    <SkillList>
      {skill.skills.map((item, i) => (
        <SkillItem key={i}>
          <SkillImage src={item.image} alt={item.name} />
          {item.name}
        </SkillItem>
      ))}
    </SkillList>
  </Skill>
))}

</SkillsContainer>
</Container>

  )
}

export default Skills;