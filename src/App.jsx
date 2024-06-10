import styled from "styled-components"

import { Home } from "./pages/Home"

const StyledDiv = styled.div `
  @media (min-width: 576px) {
    background-color: aquamarine;
  }
  @media (min-width: 768px) {
    background-color: bisque;
  }
  @media (min-width: 992px) {
    background-color: darkgray;
  }
  @media (min-width: 1200px) {
    background-color: darkorange;
  }
`;

function App() {

  return (
    <StyledDiv>
      <Home/>
    </StyledDiv>
  )
}

export default App

// 576px para teléfonos móviles
// 768px para las tabletas
// 992px para portátiles
// 1200px para los grandes dispositivos