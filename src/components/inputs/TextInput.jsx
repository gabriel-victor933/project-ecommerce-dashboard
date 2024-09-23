/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export default function TextInput({ label, handleChange, schema, values }){

    return(
        <TextField 
            type="text"
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