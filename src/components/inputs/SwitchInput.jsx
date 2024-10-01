/* eslint-disable react/prop-types */
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function SwitchInput({ label, handleChange, schema, values }) {
    return (
        <FormGroup>
            <FormControlLabel
                label={label}
                control={
                    <Switch
                        name={schema}
                        color="primary"
                        checked={values[schema]}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                }
            />
        </FormGroup>
    )
}