import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 10px 0px 10px 0px;
    color: red;
  `;

interface Props {
  onChange: (value: string) => void;
  label: string;
  choices: string[];
}

function Dropdown(props: Props) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <Container>
      <FormControl fullWidth >
        <InputLabel id="simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          label="TravelType"
          onChange={handleChange}
        >
          {props.choices.map((choice, index) => (
            <MenuItem value={choice} key={index}>{choice}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
}

export default Dropdown;
