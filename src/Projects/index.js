import React from 'react'
import styled from 'styled-components';
import { projects } from '../data/Constants';

const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
margin-bottom: 25px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    width: 100%;
  max-width: 800px;
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    font-weight: 500;
    margin-top: 12px;
    
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;
const Projects = ({project}) => {
    console.log(project);
  return (
    <Container id="projects">
<Title>Projects</Title>
<CardContainer>
          {projects
            .map((project, index) => (
                <>
                <Desc>{project.title}</Desc>
                <Description>{project.description}</Description>
                </>
           ))}
         
        </CardContainer>
    </Container>
  )
 
    
}

export default Projects