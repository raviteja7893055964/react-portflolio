import React from "react";
import styled from "styled-components";
import { projects } from "../data/Constants";

/* ---------- Layout ---------- */

const Container = styled.section`
  width: 100%;
  padding: 90px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(132, 59, 206, 0.06),
    rgba(0, 0, 0, 0)
  );
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  text-align: center;
`;

const Title = styled.h2`
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

const SubTitle = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 50px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

/* ---------- Cards ---------- */

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
`;

const Card = styled.div`
  padding: 28px 26px;
  border-radius: 20px;

  background: rgba(25, 25, 36, 0.75);
  backdrop-filter: blur(10px);

  border: 1px solid rgba(132, 59, 206, 0.25);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);

  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 26px 70px rgba(132, 59, 206, 0.45);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 22px;
`;

/* ---------- Buttons ---------- */

const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
`;

const LiveDemoButton = styled.a`
  padding: 10px 22px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  background: linear-gradient(
    135deg,
    #843bce 0%,
    #a855f7 50%,
    #ec4899 100%
  );

  box-shadow: 0 8px 24px rgba(132, 59, 206, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 32px rgba(168, 85, 247, 0.5);
  }
`;

const GitHubLink = styled.a`
  padding: 10px 20px;
  border-radius: 26px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};

  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};

  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: linear-gradient(135deg, #24292e, #000);
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  }
`;

/* ---------- Component ---------- */

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <SubTitle>
          A selection of full-stack and frontend projects showcasing real-world
          problem solving and production-ready implementations.
        </SubTitle>

        <CardGrid>
          {projects.map((project, index) => (
            <Card key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>

              <ButtonGroup>
                {project.live && (
                  <LiveDemoButton
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </LiveDemoButton>
                )}

                <GitHubLink
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </GitHubLink>
              </ButtonGroup>
            </Card>
          ))}
        </CardGrid>
      </Wrapper>
    </Container>
  );
};

export default Projects;
