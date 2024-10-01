/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";

export default function ColorInput({ label, handleChange, schema, values, errors, touched }){
    console.log(values)
    return(
        <TextField 
            type="color"
            variant="outlined"
            name={schema}
            label={label}
            onChange={handleChange}
            value={values[schema]}
            error={errors[schema] && touched[schema]}
            helperText={(errors[schema] && touched[schema]) && errors[schema]}
            sx={{
                gridArea: schema
            }}
            slotProps={{
                formHelperText: {
                    sx: {
                        position: 'absolute',
                        bottom: 0,
                        transform: 'translate(0%,100%)'
                    }
                }
            }}
        />
    )
}