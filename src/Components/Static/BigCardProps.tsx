import React from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface iBigCard {
  images?: any;
  txt?: string;
  title?: string;
  name?: string;
  imgs?: any;
  num?: string;
  boldNum?: string;
  imgs1?: any;
  imgs2?: any;
  txt1?: string;
  imgs3?: any;
  txt2?: string;
}

const BigCardProps: React.FC<iBigCard> = ({
  images,
  txt,
  title,
  name,
  imgs,
  num,
  boldNum,
  imgs1,
  imgs2,
  txt1,
  imgs3,
  txt2,
}) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const onToggled = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Card>
        <Holder>
          <Image src={images} />
          {toggle ? (
            <Hearts1 onClick={onToggled} />
          ) : (
            <Hearts onClick={onToggled} />
          )}
        </Holder>
        <Holder2>
          <Hold>
            <Icon src={imgs1} />
            <Rate>{txt}</Rate>
          </Hold>
          <Hold>
            <Icon src={imgs2} />
            <Rate>{txt1}</Rate>
          </Hold>
          <Hold>
            <Icon src={imgs3} />
            <Rate>{txt2}</Rate>
          </Hold>
        </Holder2>
        <Holder3>
          <BigText>{title}</BigText>
          <BottomSide>
            <LeftDiv>
              <Img src={imgs} />
              <Name>{name}</Name>
            </LeftDiv>
            <RightDiv>
              <CancelNum>{num}</CancelNum>
              <BoldNum>{boldNum}</BoldNum>
            </RightDiv>
          </BottomSide>
        </Holder3>
      </Card>
    </div>
  );
};

export default BigCardProps;

const Card = styled.div`
  width: 350px;
  height: 420px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  background-color: white;
  transition: all 350ms;
  cursor: pointer;

  :hover {
    transform: translate(0, -20px);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Holder = styled.div`
  width: 100%;
  height: 240px;
  position: relative;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;

const Hearts = styled(AiOutlineHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  color: white;
`;

const Hearts1 = styled(AiFillHeart)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 25px;
  color: red;
`;

const Holder2 = styled.div`
  border-bottom: 1px solid silver;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 35px;
  font-size: 13px;
  font-weight: 500;
  color: grey;
`;

const Icon = styled.img`
  margin-right: 3px;
`;

const Rate = styled.div``;

const Holder3 = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BigText = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #212529;
`;

const BottomSide = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 65px;
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const CancelNum = styled.div`
  margin-right: 5px;
  color: grey;
  font-size: 15px;
  font-weight: 500;
  text-decoration: line-through;
`;

const Img = styled.img`
  border-radius: 3px;
  margin-right: 5px;
`;

const Name = styled.div`
  font-size: 15px;
  color: grey;
  font-weight: 500;
`;

const BoldNum = styled.div`
  color: darkorange;
  font-weight: 900;
  font-size: 17px;
`;
