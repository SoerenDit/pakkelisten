import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
    onChange: () => void;
}

function Dropdown(props: Props) {
    let v = 0;

    return (
        <FormControl fullWidth>
            <InputLabel id="simple-select-label">Rejsetype</InputLabel>
            <Select
                labelId="simple-select-label"
                id="simple-select"
                value={v}
                label="TravelType"
                onChange={() => console.log(v)}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Dropdown