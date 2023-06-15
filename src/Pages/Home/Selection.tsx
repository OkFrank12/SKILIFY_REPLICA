import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";
import circle from "../../Assets/circle.svg";
import circle1 from "../../Assets/circle1.png";
import circle2 from "../../Assets/circle2.png";
import circle3 from "../../Assets/circle3.png";
import circle4 from "../../Assets/circle5.png";
import circle5 from "../../Assets/circle6.png";
import circle6 from "../../Assets/circle7.png";
import pattern1 from "../../Assets/dots-pattern-pink.svg";
import pattern2 from "../../Assets/dots-pattern-gray-vertical.svg";

const Selection = () => {
  return (
    <div>
      <Container>
        <Main>
          <Absolute>
            <Img1 src={circle1} />
            <Img2 src={circle} />
            <Img3 src={circle2} />
            <Img4 src={circle3} />
            <OrangePattern src={pattern1} />
          </Absolute>
          <MiddleText>
            <BigText>Select the best from various online courses.</BigText>
            <SmallText>
              Our online video courses give you the freedom to learn remotely,
              and our experts will guide you properly.
            </SmallText>
            <Button title="Join Today" w="120px" />
          </MiddleText>
          <Absolute>
            <Img5 src={circle4} />
            <Img6 src={circle} />
            <Img7 src={circle5} />
            <Img8 src={circle6} />
            <GreyPattern src={pattern2} />
          </Absolute>
        </Main>
      </Container>
    </div>
  );
};

export default Selection;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fef0ef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 31px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MiddleText = styled.div`
  position: relative;
  width: 800px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const BigText = styled.div`
  font-weight: 500;
  font-size: 40px;
  color: #212529;
  width: 1000px;
`;

const SmallText = styled.div`
  color: grey;
  font-size: 20px;
  width: 850px;
  margin: 30px 0;
`;

const Absolute = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
`;

const Img1 = styled.img`
  position: absolute;
  right: 130px;
`;

const Img2 = styled.img`
  position: absolute;
  right: 80px;
  top: 140px;
`;

const Img3 = styled.img`
  position: absolute;
  top: 200px;
  right: 140px;
  z-index: 2;
`;

const Img4 = styled.img`
  position: absolute;
  top: 300px;
  z-index: 2;
  right: 100px;
`;

const Img5 = styled.img`
  position: absolute;
  left: 60px;
`;

const Img6 = styled.img`
  position: absolute;
  right: 30px;
  z-index: 2;
`;

const Img7 = styled.img`
  position: absolute;
  top: 150px;
  left: 120px;
  z-index: 2;
`;

const Img8 = styled.img`
  position: absolute;
  bottom: 0;
  left: -50px;
`;

const OrangePattern = styled.img`
  position: absolute;
  top: 230px;
`;

const GreyPattern = styled.img`
  position: absolute;
  right: 0;
  top: 65px;
`;
