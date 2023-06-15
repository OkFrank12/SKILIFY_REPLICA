import React from "react";
import Button from "./Button";
import styled from "styled-components";
import apply from "../../Assets/apply-crd-img.webp";

interface iOptions {
  bigtxt?: string;
  smalltxt?: string;
  btn?: string;
}

const OptionsProp: React.FC<iOptions> = ({ bigtxt, smalltxt, btn }) => {
  return (
    <div>
      <Card>
        <DivHold>
          <div>
            <Img src={apply} />
          </div>
          <Div>
            <BigTxt>{bigtxt}</BigTxt>
            <SmallTxt>{smalltxt}</SmallTxt>
          </Div>
        </DivHold>
        <Div1>
          <Button title={btn} w="200px" />
        </Div1>
      </Card>
    </div>
  );
};

export default OptionsProp;

const Card = styled.div`
  width: 520px;
  height: 170px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  transition: all 350ms;
  cursor: pointer;
  background-color: #ffffff;

  :hover {
    box-shadow: #f7aea9 0px 10px 20px, #f7aea9 0px 6px 6px;
  }
`;

const DivHold = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img``;

const Div = styled.div`
  margin-left: 20px;
`;

const Div1 = styled.div`
  margin: 20px 100px;
`;

const BigTxt = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: #222121;
`;

const SmallTxt = styled.div`
  width: 430px;
  color: grey;
`;
