import Dropdown from "./Libs/UI/Dropdown";
import Input from "./Libs/UI/Input";

function App() {
  return (
    <>
      <div> Hvor mange dage er du væk?</div>
      <Input text="Antal dage"></Input>
      <div>
        Hvilken type rejse skal du på?
      </div>
      <Dropdown onChange={() => {}}></Dropdown>

      <div>
        Her er listen.
      </div>
    </>
  );
}

export default App;
