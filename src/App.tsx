import styled from "styled-components";
import Content from "./Libs/UI/Content";

function App() {

  const Container = styled.div`
    margin: auto;
    max-width: 400px;
    padding: 100px 20px 10px 20px;
  `;

  return (
      <Container>
        <Content />
      </Container>
  );
}

export default App;
