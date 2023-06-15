import React from "react";
import styled from "styled-components";
import OptionsProp from "../../Components/Static/OptionsProp";
import pattern from "../../Assets/dots-pattern-pink.svg";
import pattern1 from "../../Assets/dots-pattern-gray-vertical.svg";

const Option = () => {
  return (
    <div>
      <Container>
        <Main>
          <OptionsProp
            bigtxt="Become a teacher"
            smalltxt=" Teach what you love. Coursector gives you the tools to create a
              course."
            btn="Apply As Teacher"
          />
          <OptionsProp
            bigtxt="Coursector for business"
            smalltxt="Get unlimited access to 3000+ of Coursector's top courses for your team."
            btn="Get Skilify For Business"
          />
        </Main>
          <Pattern1 src={pattern} />
          <Pattern2 src={pattern1} />
      </Container>
    </div>
  );
};

export default Option;

const Pattern1 = styled.img`
  position: absolute;
  left: 10px;
  bottom: 0;
`;

const Pattern2 = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fef0ef;
  position: relative;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;
