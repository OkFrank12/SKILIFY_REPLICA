import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import dotImage from "../../Assets/dots-pattern-pink.svg";
import girlImage from "../../Assets/girl-img-study.webp";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <BigText>
              Learn more and make success the result of perfection.
            </BigText>
            <SmallText>
              Pick from over 100,000 online video courses with new additions
              published every month.
            </SmallText>
            <InputHolder>
              <Input placeholder="Search your favourite course" />
              <IconBox>
                <SearchIcon />
              </IconBox>
            </InputHolder>
            <DotImage src={dotImage} />
          </LeftHolder>
          <RightHolder>
            <BorderBox>
              <GirlImage src={girlImage} />
              <DotImages src={dotImage}/>
            </BorderBox>
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: calc(130vh - 70px);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #fef0ef;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftHolder = styled.div`
  position: relative;
`;

const BigText = styled.div`
  font-weight: 700;
  font-size: 52px;
  line-height: 1.2;
  color: #212529;
  width: 600px;
`;

const SmallText = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: grey;
  width: 600px;
  margin: 30px 0;
`;

const InputHolder = styled.div`
  width: 600px;
  background-color: white;
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: #fca09b 0px 13px 27px -5px, #fff 0px 10px 36px -10px;
`;

const Input = styled.input`
  width: 85%;
  height: 85%;
  border: 0;
  outline: 0;
  font-size: 18px;
  font-weight: 500;
  color: silver;
  padding-left: 15px;
`;

const SearchIcon = styled(FiSearch)`
  color: white;
  font-size: 30px;
`;

const IconBox = styled.div`
  width: 70px;
  background-color: #f56962;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
`;

const DotImage = styled.img`
  position: absolute;
  bottom: -180px;
  left: -104px;
  height: 220px;
`;

const DotImages = styled.img`
  position: absolute;
  top: 50px;
  right: -90px;
`;

const RightHolder = styled.div``;

const BorderBox = styled.div`
  border: 3px solid #f68c20;
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 20px;
`;

const GirlImage = styled.img`
  width: 400px;
  position: absolute;
  top: -40px;
  left: -40px;
`;
