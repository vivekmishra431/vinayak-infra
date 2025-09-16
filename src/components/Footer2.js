import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from './Footer2Styles';
const Footer2 = () => {
  return (
    <Box>
    <h1 style={{ color: "aliceblue", 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      CONACT US
    </h1>
    <Container>
      <Row>
        <Column>
          <Heading>About Us</Heading>
          <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#">Mission</FooterLink>
          <FooterLink href="#">Values</FooterLink>
        </Column>
        <Column>
          <Heading>Services</Heading>
          <FooterLink href="#">Building Towers</FooterLink>
          <FooterLink href="#">Renting Equipments</FooterLink>
          {/* <FooterLink href="#">Coding</FooterLink>
          <FooterLink href="#">Teaching</FooterLink> */}
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">91+ 7208431022</FooterLink>
          {/* <FooterLink href="#">Ahemdabad</FooterLink>
          <FooterLink href="#">Indore</FooterLink>
          <FooterLink href="#">Mumbai</FooterLink> */}
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>
                Twitter
              </span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>
                Youtube
              </span>
            </i>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  </Box>
  )
}

export default Footer2
