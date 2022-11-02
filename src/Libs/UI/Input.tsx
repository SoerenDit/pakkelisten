import { TextField } from "@mui/material";
import styled from "styled-components";

interface Props {
  text: string;
  onChange: (value: string) => void;
}

const Container = styled.div`
  margin: 10px;
`;

function Input(props: Props) {
    
  const handleChange = (event: { target: { value: string; }; }) => {
    props.onChange(event.target.value);
  };

  return (
    <Container>
      <TextField
        fullWidth
        type="number"
        id="days-away"
        label={props.text}
        variant="outlined"
        onChange={handleChange}
      ></TextField>
    </Container>
  );
}

export default Input;
