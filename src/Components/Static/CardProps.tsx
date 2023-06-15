import React from "react";
import styled from "styled-components";

interface iCard {
  images?: any;
  boldtext?: string;
  lighttext?: string;
  bg?: string;
  bgb?: string;
  bgh?: string;
}

const CardProps: React.FC<iCard> = ({
  images,
  boldtext,
  bg,
  lighttext,
  bgb,
  bgh,
}) => {
  return (
    <div>
      <Card bg={`${bg}`} bgh={`${bgh}`}>
        <Box bgb={`${bgb}`}>
          <Image src={images} />
        </Box>
        <BoldText>{boldtext}</BoldText>
        <LightText>{lighttext}</LightText>
      </Card>
    </div>
  );
};
export default CardProps;

const Image = styled.img``;

const BoldText = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 10px 0;
  color: #212529;
`;
const Box = styled.div<{
  bgb: string;
}>`
  width: 70px;
  height: 70px;
  background-color: ${({ bgb }) => bgb};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightText = styled.div`
  font-size: 16px;
  color: grey;
`;

const Card = styled.div<{
  bg: string;
  bgh: string;
}>`
  width: 235px;
  height: 300px;
  background-color: ${({ bg }) => bg};
  border-radius: 7px;
  padding: 15px;
  display: flex;
  margin: 10px 10px;
  /* justify-content: center; */
  flex-direction: column;
  cursor: pointer;
  :hover {
    ${BoldText} {
      color: white;
    }
    ${LightText} {
      color: white;
    }
    ${Box} {
      background-color: white;
    }
    background-color: ${({ bgh }) => bgh};
  }
`;
