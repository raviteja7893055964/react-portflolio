import React from "react";
import styled from "styled-components";
import { Bio } from "../data/Constants";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

/* ================= STYLES ================= */

const FooterContainer = styled.footer`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(132, 59, 206, 0.08) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.h2`
  font-weight: 600;
  font-size: 22px;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.6px;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 8px;
`;

const SocialMediaIcon = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: linear-gradient(135deg, #843bce, #ec4899);
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.45);
  }
`;

const CopyRight = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

/* ================= COMPONENT ================= */

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ponnam Raviteja</Logo>

        <SocialMediaIcons>
          <SocialMediaIcon
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialMediaIcon>

          <SocialMediaIcon
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>

        <CopyRight>
          © {new Date().getFullYear()} Ponnam Raviteja. All rights reserved.
        </CopyRight>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
