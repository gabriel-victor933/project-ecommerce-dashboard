/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export default function NumberInput({ label, handleChange, schema, values }){

    return(
        <TextField 
            type="number"
            variant="outlined"
            name={schema}
            label={label}
            onChange={handleChange}
            value={values[schema]}
            sx={{
                gridArea: schema
            }}
        />
    )
}