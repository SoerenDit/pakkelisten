import styled from "styled-components";
import { ThemeProvider } from "./Libs/Features/Theme";
import Content from "./Libs/UI/Content";


export default function App() {
  const Container = styled.div`
    margin: auto;
    max-width: 400px;
    padding: 100px 20px 10px 20px;
  `;

  return (
    <ThemeProvider value={"main"}>
      <Container>
        <Content />
      </Container>
    </ThemeProvider>
  );
}

