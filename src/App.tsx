import styled from "styled-components";
import { ThemeProvider } from "./libs/features/Theme";
import Content from "./libs/ui/Content";


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

