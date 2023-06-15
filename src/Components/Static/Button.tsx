import React from "react";
import styled from "styled-components";

interface iBtn {
  title?: string;
  w?: string;
}

const Button: React.FC<iBtn> = ({ title, w }) => {
  return (
    <div>
      <Container w={`${w}`}>{title}</Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  w: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ w }) => w};
  height: 35px;
  color: white;
  transition: all 350ms;
  cursor: pointer;
  border-radius: 3px;
  background-color: #f56962;
  padding: 10px;

  :hover {
    box-shadow: #f56962 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
