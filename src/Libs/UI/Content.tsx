import { Typography } from "@mui/material";
import { useState } from "react";
import CheckboxList from "./CheckboxList";
import Dropdown from "./Dropdown";
import NumberPicker from "./NumberPicker";

function Content() {
    
  const [trip, setTrip] = useState("");
  const [days, setDays] = useState(0);

  return (
    <>
        <Typography> Hvor mange dage er du væk?</Typography>
        <NumberPicker value={days} onChange={(n: number) => setDays(n)}></NumberPicker>
        <Typography>Hvilken type rejse skal du på?</Typography>
        <Dropdown
          label="Rejsetype"
          choices={["Vandretur", "Cykeltur", "Bytur"]}
          onChange={(value) => {
            setTrip(value);
          }}
        ></Dropdown>
        <CheckboxList days={days} trip={trip}></CheckboxList>
    </>
  );
}

export default Content;
