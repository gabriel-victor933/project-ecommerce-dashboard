/* eslint-disable react/prop-types */
import { TextField, MenuItem } from "@mui/material";

export default function SelectInput({ label, handleChange, schema, values, options, errors, touched }) {

    return (
        <TextField
            select
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
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    )
}