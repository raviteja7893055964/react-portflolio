import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import { education } from '../../data/Constants';
import EducationCard from './EducationCard';

const Container = styled.div`
    margin-bottom: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
   
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;
const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;
const Education = () => {
  return (
    <Container id="education">
     <Wrapper>
      <Title>Education</Title>
      <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                <Timeline>
                  {
                    education.map((education, index)=>(
                      <EducationCard key={index} education={education}/>
                    ))
                  }
                </Timeline>                                                                                                 
                </TimelineSection>
      </Wrapper>
      </Container>
  )
}

export default Education;