import { Button } from "@mui/material";
import styled from "styled-components";

interface Props {
  text: string;
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
}

const Container = styled.div`
  margin: 30px 0px 10px 0px;
`;

function Input(props: Props) {

  return (
    <Container>
      <Button sx={{display: "block", margin: "auto"}} variant={props.variant} onClick={props.onClick}>{props.text}</Button>
    </Container>
  );
}

export default Input;
