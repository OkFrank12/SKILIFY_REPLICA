import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import ReviewCard from "../../Components/Static/ReviewCard";
import user from "../../Assets/user1.webp";
import user1 from "../../Assets/user.webp";
import pattern from "../../Assets/dots-pattern-gray.svg";

const StudentsRemark = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const onToggled = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Main>
          <TopSide>
            <BigText>What our students have to say</BigText>
            <BtnSide>
              <LeftSide onClick={onToggled}>
                <Icon />
              </LeftSide>
              <LeftSide onClick={onToggled}>
                <Icon1 />
              </LeftSide>
            </BtnSide>
          </TopSide>
          {toggle ? (
            <CardsHolder>
              <ReviewCard
                images={user}
                name="Williams Taylor"
                writeup="Skilify is the best platform to learn new technologies and courses. I have learnt a lot from this platform"
              />
              <ReviewCard
                images={user1}
                name="Oliver Smith"
                writeup="If you search for a platform that can give you the best learning courses, then I would recommend you Skilify only."
              />
            </CardsHolder>
          ) : (
            <CardsHolder>
              <ReviewCard
                images={user}
                name="Jenny Johnson"
                writeup="I will tell all people to register for Skilify now as they offer the best courses at affordable rates."
              />
              <ReviewCard
                images={user1}
                name="Mahir Dindsa"
                writeup="I have learnt lots of courses from this website. This website is a life saviour for me. So register now with this website."
              />
              <Dots src={pattern} />
            </CardsHolder>
          )}
        </Main>
      </Container>
    </div>
  );
};

export default StudentsRemark;

const Dots = styled.img`
  position: absolute;
  left: 470px;
  bottom: -20px;
`;

const CardsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 350px;
  padding: 70px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efeff6;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const TopSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #212529;
`;

const BtnSide = styled.div`
  display: flex;
`;

const Icon = styled(BsArrowLeft)`
  font-size: 20px;
  color: grey;
  transition: all 350ms;
`;

const Icon1 = styled(BsArrowRight)`
  font-size: 20px;
  color: grey;
  transition: all 350ms;
`;

const LeftSide = styled.div`
  width: 60px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;

  :hover {
    ${Icon} {
      color: darkorange;
    }
    ${Icon1} {
      color: darkorange;
    }
  }
`;
