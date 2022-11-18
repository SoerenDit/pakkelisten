import { Typography } from "@mui/material";
import { useState } from "react";
import CheckboxList from "./CheckboxList";
import Dropdown from "./Dropdown";
import MyButton from "./MyButton";
import NumberPicker from "./NumberPicker";
import styled from "styled-components";

const QuestionsContainer = styled.div<{showQuestions: boolean}>`
    display: ${(props) => props.showQuestions? "block" : "none"};
  `;

const PackingListContainer = styled.div<{showPackingList: boolean}>`
    display: ${(props) => props.showPackingList? "block" : "none"};
  `;

function Content() {
  const [trip, setTrip] = useState("");
  const [weather, setWeather] = useState("");
  const [showPackingList, setShowPackingList] = useState(false);

  const [days, setDays] = useState(0);

  const handleClick = () => {
    setShowPackingList(!showPackingList);
  };

  return (
    <>
      <QuestionsContainer showQuestions={!showPackingList}>
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
        <MyButton text={"Generer pakkeliste"} onClick={handleClick} variant={"contained"}></MyButton>
      </QuestionsContainer>
      <PackingListContainer showPackingList={showPackingList}>
        <MyButton text={"Tilbage"} onClick={handleClick} variant={"text"}></MyButton>

        <CheckboxList
          days={days}
          trip={trip}
        ></CheckboxList>
      </PackingListContainer>
    </>
  );
}

export default Content;
