import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

interface Props {
    onChange: () => void;
}

function Dropdown(props: Props) {
    const [value, setValue] = useState("");

    const handleChange = (event: SelectChangeEvent<string>) => {
        setValue(event.target.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="simple-select-label">Rejsetyper</InputLabel>
            <Select
                labelId="simple-select-label"
                id="simple-select"
                value={value}
                label="TravelType"
                onChange={handleChange}
            >
                <MenuItem value={1} >Ten</MenuItem>
                <MenuItem value={2}>Twenty</MenuItem>
                <MenuItem value={3}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Dropdown

