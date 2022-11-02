import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  onChange: (value: string) => void;
}

function Dropdown(props: Props) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  const Container = styled.div`
      margin: 10px 0px 10px 0px;
  `;

  return (
    <Container>
      <FormControl fullWidth>
        <InputLabel id="simple-select-label">Rejsetyper</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={value}
          label="TravelType"
          onChange={handleChange}
        >
          <MenuItem value={"vandretur"}>Vandretur</MenuItem>
          <MenuItem value={"cykeltur"}>Cykeltur</MenuItem>
          <MenuItem value={"bytur"}>Bytur</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}

export default Dropdown;
