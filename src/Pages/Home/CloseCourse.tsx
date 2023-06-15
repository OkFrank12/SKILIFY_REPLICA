import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";
import check from "../../Assets/check-point.svg";
import knowAbout from "../../Assets/know-about.webp";

const CloseCourse = () => {
  const data: any = [
    {
      imgs: check,
      txt: "Detail description of each course.",
    },
    {
      imgs: check,
      txt: "Easy to understand language.",
    },
    {
      imgs: check,
      txt: "Simple and easy to learn courses.",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <BigText>Get more close with your courses.</BigText>
            <SmallText>
              We provide a wide range of courses for the different sectors you
              can choose from, which suits you perfectly
            </SmallText>
            {data.map((el: any) => (
              <Div>
                <CheckImg src={el.imgs} />
                <LittleText>{el.txt}</LittleText>
              </Div>
            ))}
            <br />
            <Button title="Start Learning Now" w="200px" />
          </LeftHolder>
          <RightHolder>
            <BorderBox>
              <MaleImg src={knowAbout} />
            </BorderBox>
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default CloseCourse;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const LeftHolder = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-evenly;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  width: 500px;
`;

const SmallText = styled.div`
  font-size: 20px;
  color: grey;
  margin: 10px 0;
  width: 550px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const CheckImg = styled.img``;

const LittleText = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: grey;
  margin-left: 20px;
`;

const RightHolder = styled.div``;

const BorderBox = styled.div`
  width: 450px;
  height: 550px;
  border: 5px solid #f56962;
  border-radius: 0 200px 0 0;
  position: relative;
`;

const MaleImg = styled.img`
  position: absolute;
  width: 450px;
  top: 50px;
  left: -50px;
`;
