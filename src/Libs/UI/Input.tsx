import { TextField } from "@mui/material";

interface Props {
    text: string;
}

function Input(props: Props) {
    return (
        <TextField id="days-away" label={props.text} variant="outlined"></TextField>
    );
  }
  
  export default Input;
  