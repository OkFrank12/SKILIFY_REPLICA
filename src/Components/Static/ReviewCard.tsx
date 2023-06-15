import React from "react";
import styled from "styled-components";
import starImg from "../../Assets/star.svg";

interface iReviews {
  images?: any;
  name?: string;
  writeup?: string;
}

const ReviewCard: React.FC<iReviews> = ({ images, name, writeup }) => {
  return (
    <div>
      <Card>
        <Vr />
        <Holder>
          <SubHold>
            <Female src={images} />
            <TextHolder>
              <Name>{name}</Name>
              <Bio>Student</Bio>
            </TextHolder>
            <StarPath>
              <Star src={starImg} />
              <Star src={starImg} />
              <Star src={starImg} />
              <Star src={starImg} />
              <Star src={starImg} />
            </StarPath>
          </SubHold>
          <CommentSide>{writeup}</CommentSide>
        </Holder>
      </Card>
    </div>
  );
};

export default ReviewCard;

const Vr = styled.div`
  height: 100%;
  position: absolute;
  width: 3px;
  top: 0;
  left: 0;
  transition: all 350ms;
`;

const Card = styled.div`
  width: 530px;
  height: 170px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.573);
  flex-direction: column;
  padding: 15px;
  border-radius: 0 30px 0 0;
  position: relative;
  transition: all 350ms;
  cursor: pointer;
  z-index: 2;

  :hover {
    ${Vr} {
      background-color: darkorange;
    }
    background-color: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
`;

const SubHold = styled.div`
  display: flex;
`;

const Female = styled.img``;

const TextHolder = styled.div`
  margin-left: 20px;
  flex: 1;
`;

const Name = styled.div`
  color: #343638;
  font-size: 22px;
  font-weight: 500;
`;

const Bio = styled.div`
  color: grey;
`;

const StarPath = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Star = styled.img``;

const CommentSide = styled.div`
  font-style: italic;
  color: grey;
  font-size: 16px;
  width: 95%;
`;
