import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0077B6;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactHeading = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ContactInfo = styled.p`
  font-size: 16px;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  font-size: 24px;
  color: #fff;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <ContactSection>
              <ContactHeading>Contact</ContactHeading>
              <ContactInfo>Email: contact@gmail.com</ContactInfo>
              <ContactInfo>Phone: 1234567890</ContactInfo>
            </ContactSection>
          </div>
        </div>
      </div>
      <SocialLinks>
        
        <SocialLink href="#">LinkedIn</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
