import React from "react";
import styled from "styled-components";
import starImg from "../../Assets/star.svg";
import eyeImg from "../../Assets/crd-view.svg";
import playImg from "../../Assets/crd-play.svg";
import profile from "../../Assets/profile-img1.webp";
import studentImg from "../../Assets/crd-img.webp";
import Button from "../../Components/Static/Button";
import BigCardProps from "../../Components/Static/BigCardProps";
import kidsImg from "../../Assets/crd-img2.webp";
import profile2 from "../../Assets/profile-img.webp";
import kidsImg2 from "../../Assets/crd-img3.webp";
import profile3 from "../../Assets/profile-img2.webp";
import pattern from "../../Assets/dots-pattern-gray.svg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import profile4 from "../../Assets/profile-img3.webp";
import profile5 from "../../Assets/profile-img4.webp";
import teacher from "../../Assets/crd-img5.webp";
import profile6 from "../../Assets/profile-img5.webp";
import graphics from "../../Assets/crd-img4.webp";

const Choice = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const onToggled = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <Container>
        <Main>
          <Headings>
            <BigText>Get your choice of course</BigText>
            <Button title="View All" w="120px" />
          </Headings>
          {toggle ? (
            <CardContent>
              <BigCardProps
                images={kidsImg2}
                imgs1={starImg}
                imgs2={eyeImg}
                imgs3={playImg}
                txt1="35,00"
                txt2="12"
                txt="4.2"
                title="Software Development From A to Z Beginner"
                imgs={profile4}
                name="Anna Sthesia"
                num="$250.00"
                boldNum="$220.00"
              />
              <BigCardProps
                images={graphics}
                imgs1={starImg}
                imgs2={eyeImg}
                imgs3={playImg}
                txt1="49,00"
                txt2="7"
                txt="4.5"
                title="Graphic Design Master Class For Beginners"
                imgs={profile5}
                name="Paul Molive"
                num="$100.00"
                boldNum="$50.00"
              />
              <BigCardProps
                images={teacher}
                imgs1={starImg}
                imgs2={eyeImg}
                imgs3={playImg}
                txt1="85,00"
                txt2="17"
                txt="4.8"
                title="Complete Javascript Course Beginner"
                imgs={profile6}
                name="Pankaj Kumar"
                num="$320.00"
                boldNum="$270.00"
              />
            </CardContent>
          ) : (
            <CardContent>
              <BigCardProps
                images={studentImg}
                imgs1={starImg}
                imgs2={eyeImg}
                imgs3={playImg}
                txt1="49,00"
                txt2="9"
                txt="4.5"
                title="Learn Python Programming Beginner"
                imgs={profile}
                name="Petey Cruizer"
                num="$200.00"
                boldNum="$150.00"
              />
              <BigCardProps
                images={kidsImg}
                imgs1={starImg}
                imgs2={eyeImg}
                imgs3={playImg}
                txt1="23,00"
                txt2="7"
                txt="4.3"
                title="Statistics Data Science and Business Analysis"
                imgs={profile2}
                name="Nicole Brown"
                num="$150"
                boldNum="$99.99"
              />
              <BigCardProps
                images={kidsImg2}
                imgs1={starImg}
                imgs2={eyeImg}
                imgs3={playImg}
                txt1="70,00"
                txt2="15"
                txt="4.7"
                title="Learn HTML5 Programming Beginner"
                imgs={profile3}
                name="Anna Sthesia"
                num="$100.00"
                boldNum="$70.00"
              />
            </CardContent>
          )}
          <PunchBottom>
            <LeftBtn onClick={onToggled}>
              <Icon />
            </LeftBtn>
            {toggle ? (
              <ToggleLine bg="darkorange" />
            ) : (
              <ToggleLine bg="white" />
            )}
            {toggle ? (
              <ToggleLine bg="white" />
            ) : (
              <ToggleLine bg="darkorange" />
            )}
            <LeftBtn onClick={onToggled}>
              <Icon1 />
            </LeftBtn>
            <Pattern src={pattern} />
          </PunchBottom>
        </Main>
      </Container>
    </div>
  );
};

export default Choice;

const Pattern = styled.img`
  position: absolute;
  top: -30px;
  left: 450px;
`;

const PunchBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  position: relative;
  align-items: center;
`;

const Icon = styled(BsArrowLeft)`
  font-size: 20px;
  color: grey;
  transition: all 350ms;
`;

const Icon1 = styled(BsArrowRight)`
  font-size: 20px;
  transition: all 350ms;
  color: grey;
`;

const LeftBtn = styled.div`
  width: 55px;
  height: 55px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ToggleLine = styled.div<{
  bg: string;
}>`
  width: 42%;
  height: 4px;
  background-color: ${({ bg }) => bg};
  border-radius: 50px;
`;

const CardContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  z-index: 2;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #efeff6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100%;
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
