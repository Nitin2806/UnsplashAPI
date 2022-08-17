import React, { useState } from "react";
import styled from "styled-components";
import Home from "./Home";

const Front = () => {
  const [newQuery, setnewQuery] = useState();
  const changeQuery = (Query) => {
    setnewQuery(Query);
  };

  return (
    <Container>
      <Header>
        <Nav>
          <Logo src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
          <ul>
            <li>
              <a href="https://movielust.in">Home</a>
            </li>
            <li>
              <a href="https://movielust.in">About</a>
            </li>
            <li>
              <a href="https://movielust.in">Work</a>
            </li>
            <li>
              <a href="https://movielust.in">Contact</a>
            </li>
          </ul>
          <Contact>Get in Touch</Contact>
        </Nav>
      </Header>
      <BodyHead>
        <h2>
          I’m a freelance <span>digital designer</span>, with +10 years of
          experience
        </h2>
      </BodyHead>
      <NavContainer>
        <ul>
          <li
            onClick={() => {
              changeQuery("code");
            }}
          >
            Coding
          </li>
          <li
            onClick={() => {
              changeQuery("cat");
            }}
          >
            Cat
          </li>
          <li
            onClick={() => {
              changeQuery("dog");
            }}
          >
            Dog
          </li>
          <li
            onClick={() => {
              changeQuery("car");
            }}
          >
            Cars
          </li>
          <li
            onClick={() => {
              changeQuery("shoe");
            }}
          >
            Shoes
          </li>
        </ul>
      </NavContainer>
      {<Home navquery={newQuery} />}
      <Footer>
        <FTitle>
          <h2>Let's work Together</h2>
          <Contact>Get in Touch</Contact>
          <Social>
            <a href="https://pinterest.com">
              {/* <span class="fa fa-pinterest"></span> */}
            </a>
            <a href="https://linked.com">
              {/* <span class="fa fa-linkedin"></span> */}
            </a>
            <a href="https://instagram.com">
              {/* <span class="fa fa-instagram"></span> */}
            </a>
            <a href="https://facebook.com">
              {/* <span class="fa fa-facebook"></span> */}
            </a>
            <a href="https://twitter.con">
              {/* <span class="fa fa-twitter"></span> */}
            </a>
          </Social>
          <Copyright>
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>2022 All
            rights reserved | This template is made <i aria-hidden="true"></i>{" "}
            by Nitin
          </Copyright>
        </FTitle>
      </Footer>
    </Container>
  );
};

export default Front;

const Container = styled.div`
  overflow-x: hidden;
`;

const Header = styled.div`
  max-width: 100%;
  padding: 0 180px;
  height: 20vh;
  @media (max-width: 700px) {
    padding: 0;
    height: 10vh;
  }
`;

const Nav = styled.nav`
  display: flex;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ul li {
    display: inline-block;
    list-style: none;
    margin: 10px 30px;
  }
  ul li a {
    text-decoration: none;
    font-size: 18px;
    color: #001418;
    font-weight: 500;

    /* margin-left: 15px;
    margin-right: 10px;
    padding: 20px 0 5px; */
  }
  @media (max-width: 700px) {
    padding: 5px;
    ul li {
      margin: 5px 10px;
    }
    ul li a {
      font-size: 12px;
    }
  }
`;
const Logo = styled.img`
  width: 80px;
  @media (max-width: 700px) {
    width: 50px;
  }
`;
const Contact = styled.a`
  display: inline-block;
  font-size: 14px;
  min-width: 140px;
  text-align: center;
  padding: 15px 10px;
  cursor: pointer;
  position: relative;
  color: #fff;
  border: none;
  background-color: #000;
  margin-right: 15px;
  z-index: 1;
  @media (max-width: 700px) {
    padding: 8px 5px;
    font-size: 10px;
    border-radius: 10px;
    margin-right: 0;
    min-width: 50px;
  }
`;

const BodyHead = styled.div`
  /* margin-top: 3px; */
  max-width: 100%;
  font-size: 35px;
  padding: 10px 290px;
  text-align: center !important;

  h2 {
    color: #001418;
    margin: 0;
    font-weight: 500;
    font-family: "Josefin Sans", sans-serif;
    word-spacing: 10px;
    line-height: 1.2;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    span {
      color: #979797;
    }
  }
  @media (max-width: 700px) {
    font-size: 15px;
    padding: 10px 50px;
  }
`;

const NavContainer = styled.div`
  width: 100%;

  max-width: 100%;

  max-width: 100%;
  margin: 0 auto 0 auto;
  padding: 0 15px 0 55px;
  ul {
    list-style: none;
    padding-bottom: 100px;
  }
  ul li {
    font-size: 16px;
    display: inline-block;
    margin-right: 30px;
    padding-bottom: 10px;
    color: #979797;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    margin: 0 auto 0 auto;
    padding: 0 15px 0 25px;
    ul {
      padding-bottom: 20px;
    }
    ul li {
      font-size: 14px;
    }
  }
`;

const Footer = styled.div`
  padding: 110px 0;
  text-align: center !important;
  display: block;
  box-sizing: border-box;
  max-width: 100%;
  @media (max-width: 700px) {
  }
`;
const FTitle = styled.div`
  max-width: 100%;
  margin: 0 auto 0 auto;
  padding: 0 15px 0 15px;
  h2 {
    font-size: 50px;
    margin-bottom: 3rem !important;
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 30px;
      margin-bottom: 3rem !important;
    }
  }
`;
const Social = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
  max-width: 100%;
`;

const Copyright = styled.div`
  font-size: 12px;
  max-width: 100%;

  color: #979797;
`;
