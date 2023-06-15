import image0 from "../../Assets/circle.svg";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillChatFill, BsChevronDown, BsCart2 } from "react-icons/bs";
import styled from "styled-components";
import Button from "./Button";
import { useThrottle } from "./useThrottle";

const Header = () => {
  const [scroll, setScroll] = React.useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", useThrottle(onScroll, 5000));
  const data: any = [
    {
      nav: "Home",
    },
    {
      nav: "Pages",
    },
    {
      nav: "Courses",
    },
    {
      nav: "Features",
    },
    {
      nav: "Blog",
    },
  ];

  return (
    <div>
      {scroll ? (
        <Container
          bg=""
          style={{
            position: "fixed",
            boxShadow:
              "#fff 0px 5px 5px -5px, rgba(170, 168, 168, 0.3) 0px 8px 16px -8px",
          }}
        >
          <Main>
            <LogoHolder>
              <Logo src={image0} />
              <ChatIcon />
              <Text>Skilify</Text>
            </LogoHolder>
            <NavsHolder>
              {data.map((props: any) => (
                <SubHolder>
                  <Navs>{props.nav}</Navs>
                  <Arrow />
                </SubHolder>
              ))}
            </NavsHolder>
            <CallToAction>
              <Search />
              <Carts />
              <Button title="Register" w="120px" />
            </CallToAction>
          </Main>
        </Container>
      ) : (
        <Container bg="we">
          <Main>
            <LogoHolder>
              <Logo src={image0} />
              <ChatIcon />
              <Text>Skilify</Text>
            </LogoHolder>
            <NavsHolder>
              {data.map((props: any) => (
                <SubHolder>
                  <Navs>{props.nav}</Navs>
                  <Arrow />
                </SubHolder>
              ))}
            </NavsHolder>
            <CallToAction>
              <Search />
              <Carts />
              <Button title="Register" w="120px" />
            </CallToAction>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Text = styled.div`
  font-size: 30px;
  font-weight: 50px;
  color: #212529;
  font-weight: 500;
  margin-left: 5px;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const Search = styled(FiSearch)`
  font-size: 25px;
  color: grey;
  cursor: pointer;
`;

const Carts = styled(BsCart2)`
  font-size: 25px;
  color: grey;
  cursor: pointer;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const SubHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  color: grey;
  cursor: pointer;

  :hover {
    color: #312e2e;
  }
`;

const Navs = styled.div`
  margin-right: 4px;
`;

const Arrow = styled(BsChevronDown)`
  font-size: 13px;
  margin-top: 4px;
`;

const Container = styled.div<{
  bg: string;
}>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => (bg ? "#fef0ef" : "white")};
  /* position: fixed; */
  z-index: 10;
  transition: "all 350ms";
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const Logo = styled.img`
  width: 30px;
  position: relative;
`;

const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatIcon = styled(BsFillChatFill)`
  color: white;
  position: absolute;
  left: 107px;
  font-size: 20px;
  rotate: calc(270deg);
`;
