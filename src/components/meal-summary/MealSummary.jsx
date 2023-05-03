import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/img/summary-image.png";
import MealSummaryCard from "./MealSummaryCard";

function MealSummary() {
  return (
    <Container>
      <OrderImageBack src={summaryImage} alt="summary-image" />
      <MealSummaryCard />
    </Container>
  );
}

export default MealSummary;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const OrderImageBack = styled.img`
  height: 432px;
  width: 100%;
  /* width: 1440px; */
`;
