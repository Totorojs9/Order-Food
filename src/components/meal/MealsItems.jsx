import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import Button from "../UI/Button";

const products = [
  {
    id: v4(),
    title: "Sushi",
    receapt: "Finest fish and veggies",
    price: 22.99,
    amount: "Amount",
    quantity: 1,
  },
  {
    id: v4(),
    title: "Schnitzel",
    receapt: "A german specialty!",
    price: 16.05,
    amount: "Amount",
    quantity: 1,
  },
  {
    id: v4(),
    title: "Barbecue Burger",
    receapt: "American, raw, meaty",
    price: 12.99,
    amount: "Amount",
    quantity: 1,
  },
  {
    id: v4(),
    title: "Green Bowl",
    receapt: "Healthy...and green...",
    price: 19.99,
    amount: "Amount",
    quantity: 1,
  },
];

console.log(products);
export const MealsItems = () => {
  return (
    <Container>
      {products.map((el) => (
        <>
          <div key={el.id} className="box">
            <>
              <OrderCard>
                <h3>{el.title}</h3>
                <i>{el.receapt}</i>
                <p>${el.price}</p>
              </OrderCard>
              <OrderCardTwo>
                <div>
                  <p>{el.amount}</p>
                  <input type="number" defaultValue={el.quantity} />
                </div>
                <OrderButton>+Add</OrderButton>
              </OrderCardTwo>
            </>
          </div>
          <Span></Span>
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 1rem;
  margin-top: 140px;

  .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 959px;
    height: 149px;
    padding: 0 22px 0px 50px;
  }
  input {
    width: 60px;
    height: 2rem;
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    text-align: center;
  }
  h2 {
  }
`;
const OrderCard = styled.div`
  width: 184px;
  height: 89px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    color: #222222;
  }
  p {
    font-weight: 700;
    font-size: 1.3rem;
    color: #ad5502;
  }
`;

const OrderCardTwo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
const Span = styled.span`
  width: 959px;
  height: 0px;
  border: 1px solid #d6d6d6;
  box-shadow: 0px 6px 12px rgba(36, 36, 36, 0.08);
  margin-left: 2.7rem;
`;

const OrderButton = styled(Button)`
  margin-left: 3rem;
  margin-top: 0.8rem;
  width: 6.4rem;
  height: 2.5rem;
  cursor: pointer;
`;
