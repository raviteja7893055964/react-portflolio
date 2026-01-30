import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: linear-gradient(
    180deg,
    rgba(132, 59, 206, 0.06),
    rgba(0, 0, 0, 0)
  );
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 48px 32px;
  border-radius: 24px;

  background: rgba(25, 25, 36, 0.75);
  backdrop-filter: blur(12px);

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 36px;
  text-align: center;
  font-weight: 700;

  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 18px;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 500;

  color: #e5e7eb;
  background: rgba(255, 255, 255, 0.04);

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(132, 59, 206, 0.18);
  }

  svg {
    color: #a855f7;
    flex-shrink: 0;
  }
`;

const WhyHireMe = () => {
  return (
    <Section>
      <Card>
        <Title>Why Hire Me</Title>
        <List>
          <Item><FaCheckCircle /> 3+ years of real-world MERN experience</Item>
          <Item><FaCheckCircle /> Strong in React, Node.js, MongoDB, NestJS</Item>
          <Item><FaCheckCircle /> Built secure, scalable production applications</Item>
          <Item><FaCheckCircle /> Experience with enterprise & startup projects</Item>
          <Item><FaCheckCircle /> Clean code, best practices & performance focus</Item>
          <Item><FaCheckCircle /> Ready to contribute from day one</Item>
        </List>
      </Card>
    </Section>
  );
};

export default WhyHireMe;
