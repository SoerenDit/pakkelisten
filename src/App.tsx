import { useState } from "react";
import Dropdown from "./Libs/UI/Dropdown";
import Input from "./Libs/UI/Input";

function App() {
  const [trip, setTrip] = useState("");

  return (
    <>
      <div> Hvor mange dage er du væk?</div>
      <Input text="Antal dage"></Input>
      <div>
        Hvilken type rejse skal du på?
      </div>
      <Dropdown onChange={(value) => {setTrip(value)}}></Dropdown>

      <div>
        Hav en god {trip? trip : "tur"}!
      </div>
    </>
  );
}

export default App;
