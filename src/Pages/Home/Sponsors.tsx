import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import partner0 from "../../Assets/partner.webp";
import partner1 from "../../Assets/partner1.webp";
import partner2 from "../../Assets/partner2.webp";
import partner3 from "../../Assets/partner3.webp";
import partner4 from "../../Assets/partner4.webp";


const Sponsors = () => {
  const data: any = [
    {
      image: partner0,
    },
    {
      image: partner1,
    },
    {
      image: partner2,
    },
    {
      image: partner3,
    },
    {
      image: partner4,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <TopSide>
            <BigText>Trusted by our awesome partners</BigText>
            <BtnSide>
              <LeftSide>
                <Icon />
              </LeftSide>
              <LeftSide>
                <Icon1 />
              </LeftSide>
            </BtnSide>
          </TopSide>
          <Holder>
            {data.map((el: any) => (
              <Div>
                <Partner src={el.image} />
              </Div>
            ))}
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Sponsors;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Div = styled.div``;

const Partner = styled.img``;

const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: #e7e6e6;
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
