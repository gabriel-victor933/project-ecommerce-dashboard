/* eslint-disable react/prop-types */
import { TextField, MenuItem } from "@mui/material";

export default function SelectInput({ label, handleChange, schema, values, options }) {

    return (
        <TextField
            select
            variant="outlined"
            name={schema}
            label={label}
            onChange={handleChange}
            value={values[schema]}
            sx={{
                gridArea: schema
            }}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}