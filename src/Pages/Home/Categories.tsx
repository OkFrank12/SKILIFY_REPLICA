import React from "react";
import styled from "styled-components";
import Button from "../../Components/Static/Button";
import CardProps from "../../Components/Static/CardProps";
import pantoneImg from "../../Assets/pantone.svg";
import shakeImg from "../../Assets/shake.svg";
import briefCaseImg from "../../Assets/briefcase.svg";
import monitorImg from "../../Assets/monitor.svg";
import volumeUpImg from "../../Assets/volume-up.svg";
import cameraImg from "../../Assets/camera.svg";
import heartImg from "../../Assets/heart.svg";
import castImg from "../../Assets/cast.svg";

const Categories = () => {
  return (
    <div>
      <Container>
        <Main>
          <Headings>
            <BigText>Choice favourite course from top category</BigText>
            <Button title="See All Categories" w="200px"/>
          </Headings>
          <CardPanel>
            <CardProps
              images={pantoneImg}
              boldtext="Design"
              lighttext="Learn how to design your website. We have a wide range of designing courses from which you can select the best that suits you"
              bg="#efeff6"
              bgb="#e2ddff"
              bgh="#5444a5
            "
            />
            <CardProps
              images={monitorImg}
              boldtext="Development"
              lighttext="Learn how to develop your software and website. We provide you with a wide range of different development courses that will hep you learn more"
              bg="#fef3e8"
              bgb="#fae0d0"
              bgh="#ef8543
            "
            />
            <CardProps
              images={shakeImg}
              boldtext="IT & Software"
              lighttext="If you want to learn something new in IT and software, then this is the right place to help you with different IT and Software courses from which you can get the one for you."
              bg="#ddf7ff"
              bgb="#BBF0FF"
              bgh="#18afed
            "
            />
            <CardProps
              images={briefCaseImg}
              boldtext="Business"
              lighttext="If you want to be a successful business owner, our courses will help you do so. Book your course now."
              bg="#e6faea"
              bgb="#cef6d6"
              bgh="#5fd46d
            "
            />
            <CardProps
              images={volumeUpImg}
              boldtext="Marketing"
              lighttext="In this world, marketing is essential to learn how to do excellent marketing with our courses and get your business on top"
              bg="#e6faea"
              bgb="#cef6d6"
              bgh="#5fd46d
            "
            />
            <CardProps
              images={cameraImg}
              boldtext="Photography"
              lighttext="The most successful business today is photography, but you should know how to get it on top. Our courses will help you to pull yourself up."
              bg="#ddf7ff"
              bgb="#BBF0FF"
              bgh="#18afed
            "
            />
            <CardProps
              images={heartImg}
              boldtext="Health & Care"
              lighttext="The health and care industry has increased so far. You will need to buck yourself up to catch with, and this can be done with our courses"
              bg="#fef3e8"
              bgb="#fae0d0"
              bgh="#ef8543
            "
            />
            <CardProps
              images={castImg}
              boldtext="Technology"
              lighttext="There are various technology you need to learn if you want to stay in the race. Our course will help you to learn more"
              bg="#efeff6"
              bgb="#e2ddff"
              bgh="#5444a5
            "
            />
          </CardPanel>
        </Main>
      </Container>
    </div>
  );
};

export default Categories;

const CardPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Headings = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
`;

const BigText = styled.div`
  font-weight: 500;
  font-size: 40px;
  color: #212529;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 85%;
  height: 100%;
  flex-direction: column;
`;
