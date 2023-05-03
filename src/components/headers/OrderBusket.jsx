import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Group.svg";

function OrderBusket({ children,toggleModalHadler }) {
  return (
    <Button onClick={toggleModalHadler}>
      <BasketIcon /> <OrderBasTit>{children}</OrderBasTit>{" "}
      <OrderBasCount>7</OrderBasCount>
    </Button>
  );
}

export default OrderBusket;

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background:  #4D1601;
  }
`;

const OrderBasTit = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #ffff;
  margin-left: 13px;
`;

const OrderBasCount = styled.span`
  padding: 5px 18px;
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin-left: 24px;
`;
