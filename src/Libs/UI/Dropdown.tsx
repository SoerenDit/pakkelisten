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
  onChange: () => void;
}

function Dropdown(props: Props) {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value);
  };

  const Container = styled.div`
    margin: 10px;
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
          <MenuItem value={1}>Vandretur</MenuItem>
          <MenuItem value={2}>Cykeltur</MenuItem>
          <MenuItem value={3}>Bytur</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}

export default Dropdown;
