import { Slider } from "@mui/material";
import styled from "styled-components";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const Container = styled.div`
  margin: 10px 0px;
`;

function Input(props: Props) {

  const handleChange = (_event, newValue) => {
    props.onChange(newValue);
  };

  return (
    <Container>
      <Slider
        aria-label="Default"
        valueLabelDisplay="auto"
        value={props.value}
        onChange={handleChange}
        max={31}
      />
    </Container>
  );
}

export default Input;
