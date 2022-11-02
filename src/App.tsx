import { useState } from "react";
import Dropdown from "./Libs/UI/Dropdown";
import Input from "./Libs/UI/Input";

function App() {
  const [trip, setTrip] = useState("");
  const [days, setDays] = useState("");

  return (
    <>
      <div> Hvor mange dage er du væk?</div>
      <Input
        onChange={(value) => {
          setDays(value);
        }}
        text="Antal dage"
      ></Input>
      <div>Hvilken type rejse skal du på?</div>
      <Dropdown
        onChange={(value) => {
          setTrip(value);
        }}
      ></Dropdown>

      <div>Hav en god {trip ? trip : "tur"}! Nyd alle dine {days ? days : ""} dage.</div>
    </>
  );
}

export default App;
