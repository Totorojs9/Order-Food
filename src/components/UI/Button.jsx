import React from "react";
import styled from "styled-components";

function Button({ onClick, children, ...otherProps }) {
  return (
    <>
      <Buttons onClick={onClick} {...otherProps}>
        {children}
      </Buttons>
    </>
  );
}

export default Button;

const Buttons = styled.button`
  padding: 12px 25px 12px 18px;
  background: #8a2b06;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #7e2a0a;
  }
  &:active {
    background: #993108;
  }
`;
