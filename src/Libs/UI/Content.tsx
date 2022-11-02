import { Typography } from "@mui/material";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";


function Content() {
    
  const [trip, setTrip] = useState("");
  const [days, setDays] = useState(0);


  return (
    <>
        <Typography> Hvor mange dage er du væk?</Typography>
        <Input
          onChange={(value) => {
            setDays(value);
          }}
          text="Antal dage"
        ></Input>
        <Typography>Hvilken type rejse skal du på?</Typography>
        <Dropdown
          onChange={(value) => {
            setTrip(value);
          }}
        ></Dropdown>

        <Typography>
          Hav en god {trip ? trip : "tur"}! Nyd alle dine {days ? days : ""}{" "}
          dage. Medbring {days * 1} par sokker og {Math.floor(days * 0.3)} t-shirts.
        </Typography>
    </>
  );
}

export default Content;
