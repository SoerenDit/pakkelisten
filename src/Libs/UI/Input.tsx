import { TextField } from "@mui/material";
import styled from "styled-components";

interface Props {
  text: string;
}

const Container = styled.div`
  margin: 10px;
`;

function Input(props: Props) {
  return (
    <Container>
      <TextField
        fullWidth
        id="days-away"
        label={props.text}
        variant="outlined"
      ></TextField>
    </Container>
  );
}

export default Input;
