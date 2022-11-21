import { CircularProgress } from "@mui/material";
import styled from "styled-components";

interface Props {
}

const Container = styled.div`
  margin: 10px 0px 10px 0px;
`;

function Input(props: Props) {
  return (
    <Container>
      <CircularProgress sx={{display: "block", margin: "auto"}}></CircularProgress>
    </Container>
  );
}

export default Input;
