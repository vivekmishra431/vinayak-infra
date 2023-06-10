import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from './FooterPStyles';
const Footer2 = () => {
  return (
    <Box className='box1'>
    <h1 style={{ color: "black", 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      CONACT US
    </h1>
    <Container className='container1'>
      <Row className='row1'>
        <Column className='col'> 
          <Heading className='head1'>About Us</Heading>
          <FooterLink className='foot1' href="#">Vision</FooterLink>
          <FooterLink className='foot1' href="#">Mission</FooterLink>
          <FooterLink className='foot1' href="#">Values</FooterLink>
        </Column>
        <Column className='col'>
          <Heading className='head1'>Services</Heading>
          <FooterLink className='foot1' href="#">Building Towers</FooterLink>
          <FooterLink className='foot1' href="#">Renting Equipments</FooterLink>
          {/* <FooterLink href="#">Coding</FooterLink>
          <FooterLink href="#">Teaching</FooterLink> */}
        </Column>
        <Column className='col'>
          <Heading className='head1'>Contact Us</Heading>
          <FooterLink className='foot1' href="#">91+ 7208431022</FooterLink>
          {/* <FooterLink href="#">Ahemdabad</FooterLink>
          <FooterLink href="#">Indore</FooterLink>
          <FooterLink href="#">Mumbai</FooterLink> */}
        </Column>
        <Column className='col'>
          <Heading className='head1'>Social Media</Heading>
          <FooterLink className='foot1' href="#">
            <i className="fab fa-facebook-f">
              <span style={{ marginLeft: "10px" }}>
                Facebook
              </span>
            </i>
          </FooterLink>
          <FooterLink className='foot1' href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>
                Instagram
              </span>
            </i>
          </FooterLink>
          <FooterLink className='foot1' href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>
                Twitter
              </span>
            </i>
          </FooterLink>
          <FooterLink className='foot1' href="#">
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
