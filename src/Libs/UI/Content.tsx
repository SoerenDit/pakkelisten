import { Typography } from "@mui/material";
import { useState } from "react";
import CheckboxList from "./CheckboxList";
import Dropdown from "./Dropdown";
import MyButton from "./MyButton";
import NumberPicker from "./NumberPicker";
import styled from "styled-components";
import Spinner from "./Spinner";

const QuestionsContainer = styled.div<{ showQuestions: boolean }>`
  display: ${(props) => (props.showQuestions ? "block" : "none")};
`;

const PackingListContainer = styled.div<{ showPackingList: boolean }>`
  display: ${(props) => (props.showPackingList ? "block" : "none")};
`;

const WaitingContainer = styled.div<{ showWaiting: boolean }>`
  display: ${(props) => (props.showWaiting ? "block" : "none")};
`;

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Content() {
  const [trip, setTrip] = useState("");
  const [weather, setWeather] = useState("");
  const [step, setStep] = useState(0);

  const [days, setDays] = useState(0);

  return (
    <>
      <QuestionsContainer showQuestions={step === 0}>
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
      </QuestionsContainer>
      <WaitingContainer showWaiting={step === 1}>
        <Spinner></Spinner>
      </WaitingContainer>

      <PackingListContainer showPackingList={step === 2}>
        <MyButton
          text={"Tilbage"}
          onClick={() => setStep(0)}
          variant={"text"}
        ></MyButton>

        <CheckboxList days={days} trip={trip}></CheckboxList>
      </PackingListContainer>
    </>
  );
}

export default Content;
