import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import styled from "styled-components";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import {TfiLinkedin} from "react-icons/tfi";

const Footer = () => {
  const data: any = [
    {
      bignavs: "Home Pages",
      navs: "Home v1",
      navs1: "Home v2",
      navs2: "Home v3",
    },
    {
      bignavs: "Courses",
      navs: "All Courses",
      navs1: "Design",
      navs2: "Development",
      navs3: "Marketing",
      navs4: "Photgraphy",
    },
    {
      bignavs: "Pages",
      navs: "Blog",
      navs1: "Blog Details",
      navs2: "Courses",
      navs3: "Contact Us",
      navs4: "Teacher Profile",
      navs5: "404 Page",
    },
    {
      bignavs: "Features",
      navs: "Courses Detail V1",
      navs1: "Course Detail v2",
    },
  ];
  const data1: any = [
    {
      img: <FaFacebookF />,
    },
    {
      img: <SiTwitter />,
    },
    {
      img: <FaGoogle />,
    },
    {
      img: <TfiLinkedin />,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <NavHolder>
            {data.map((el: any) => (
              <NavLinks>
                <BigNavs>{el.bignavs}</BigNavs>
                <Navs>{el.navs}</Navs>
                <Navs>{el.navs1}</Navs>
                <Navs>{el.navs2}</Navs>
                <Navs>{el.navs3}</Navs>
                <Navs>{el.navs4}</Navs>
                <Navs>{el.navs5}</Navs>
              </NavLinks>
            ))}
          </NavHolder>
          <Bottom>
            <Copyright>
              <AiOutlineCopyright />
              <Text>
                2021 Skilify Education Private Limited. All right reserved
              </Text>
            </Copyright>
            <DivHold>
              {data1.map((el: any) => (
                <Icons>{el.img}</Icons>
              ))}
            </DivHold>
          </Bottom>
        </Main>
      </Container>
    </div>
  );
};

export default Footer;

const Text = styled.div``;

const BigNavs = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: white;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  height: 450px;
  padding-top: 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  background-color: #06060c;
`;

const Main = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NavHolder = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
`;

const NavLinks = styled.div`
  height: 100%;
`;

const Navs = styled.div`
  color: #838383;
  font-size: 20px;
  cursor: pointer;
  margin: 10px 0;

  :hover {
    color: white;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  color: #838383;
`;

const Icons = styled.div`
  font-size: 25px;
  color: #838383;
  margin-left: 15px;

  :hover{
    color: white;
  }
`;

const DivHold = styled.div`
  display: flex;
`;
