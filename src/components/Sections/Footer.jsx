import React from "react";
import styled from "styled-components";
import { companyName } from "../../utils/constants";
import LogoIcon from "../../assets/svg/Logo";

const Section = styled.section`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  background-color: #0b093b;

  @media (min-width: 640px) {
    padding-top: 4rem;
  }
  @media (min-width: 1024px) {
    padding-top: 6rem;
  }
`;

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 3rem 2rem;
  }
`;

const Column = styled.div`
  grid-column: span 2;
  @media (min-width: 768px) {
    grid-column: span 3;
  }
  @media (min-width: 1024px) {
    grid-column: span 2;
    padding-right: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: gray;
  margin-top: 1.75rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-size: 1rem;
  color: gray;
  transition: color 0.2s;
  &:hover,
  &:focus {
    color: #3b82f6;
  }
`;

const Divider = styled.hr`
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  border-color: #e5e7eb;
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: gray;
`;

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Section>
      <Container>
        <Grid>
          <Column>
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
              <LogoIcon />
              <h1
                style={{ marginLeft: "15px", color: "white" }}
                className="font20 extraBold"
              >
                {companyName}
              </h1>
            </Link>
            <Paragraph>
              Sri Sai Enterprises is a leading manufacturer and supplier of a
              wide range of plastic granules and raw materials, rapidly growing
              in India.
            </Paragraph>
          </Column>
          <Column>
            <p
              className="font20 extraBold"
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.1em",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </p>
            <List>
              <ListItem>
                <Link title="">
                  Bawana Industrial Area, Sector-3, Bawana, Delhi, India -
                  110039
                </Link>
              </ListItem>
              <ListItem>
                <Link href="tel:+918929314014" title="">
                  +918929314014
                </Link>
              </ListItem>
              <ListItem>
                <Link href="mailto:naveenjain528@gmail.com" title="">
                  naveenjain528@gmail.com
                </Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <p
              className="font20 extraBold"
              style={{
                fontSize: "0.875rem",
                fontWeight: "600",
                letterSpacing: "0.1em",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Our Location
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83945485044!2d77.06889708502515!3d28.527280312858014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03350d9d0bfb%3A0x4bf3a277ac18371a!2sBawana%20Industrial%20Area%2C%20Sector%203%2C%20Bawana%2C%20Delhi%2C%20110039%2C%20India!5e0!3m2!1sen!2sus!4v1691896947614!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map of Sri Sai Enterprises"
            ></iframe>
          </Column>
        </Grid>
        <Divider />
        <Copyright>
          © Copyright {getCurrentYear()}, All Rights Reserved by {companyName}
        </Copyright>
      </Container>
    </Section>
  );
};

export default Footer;
