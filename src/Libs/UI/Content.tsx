import { Typography } from "@mui/material";
import { useRef, useState } from "react";
import CheckboxList from "./CheckboxList";
import Dropdown from "./Dropdown";
import MyButton from "./MyButton";
import NumberPicker from "./NumberPicker";
import Spinner from "./Spinner";

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Content() {
  const [trip, setTrip] = useState("");
  const [weather, setWeather] = useState("");
  const [step, setStep] = useState(0);

  const [days, setDays] = useState(0);
  const nodeRef = useRef(null);

  return (
    <>
      {step === 0 && (
        <>
          <Typography> Hvor mange dage er du væk?</Typography>
          <NumberPicker
            value={days}
            onChange={(n: number) => setDays(n)}
          ></NumberPicker>
          <Typography>Hvilken type rejse skal du på?</Typography>
          <Dropdown
            label="Rejsetype"
            choices={["Vandretur", "Cykeltur", "Bytur"]}
            onChange={(value) => {
              setTrip(value);
              console.log(value);
            }}
          ></Dropdown>
          <Typography>Hvordan er vejret, der hvor du skal hen?</Typography>
          <Dropdown
            label="Vejr"
            choices={[
              "Dansk forår",
              "Dansk sommer",
              "Dansk efterår",
              "Dansk vinter",
            ]}
            onChange={(value) => {
              setWeather(value);
            }}
          ></Dropdown>
          <MyButton
            text={"Generer pakkeliste"}
            onClick={() => {
              setStep(1);
              setTimeout(() => setStep(2), randomNumberInRange(2000, 5000));
            }}
            variant={"contained"}
          ></MyButton>
        </>
      )}
      {step === 1 && <Spinner></Spinner>}
      {step === 2 && (
        <>
          <MyButton
            text={"Tilbage"}
            onClick={() => setStep(0)}
            variant={"text"}
          ></MyButton>

          <CheckboxList days={days} trip={trip}></CheckboxList>
        </>
      )}
    </>
  );
}

export default Content;
