import styled from "styled-components";
import Header from "./components/headers/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import Meal from "./components/meal/Meal";

function App() {
  return (
    <Apps>
      <Header />
      <MealSummary />
      <Meal />
    </Apps>
  );
}
const Apps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default App;
