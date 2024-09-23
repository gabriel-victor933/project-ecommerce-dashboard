/* eslint-disable react/prop-types */
import { TextField, InputAdornment } from "@mui/material";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

export default function CurrencyInput({ label, setFieldValue, schema, values, errors, touched }){

    function handleChangeCurrency(e){
        const value = e.target.value.replace('.','')

        const number = parseFloat(value)
        
        if(isNaN(number) || value.length > 20) return

        const newValue = (number/100).toFixed(2)

        setFieldValue(schema, newValue)
    }

    return(
        <TextField 
            type="text"
            variant="outlined"
            name={schema}
            label={label}
            onChange={handleChangeCurrency}
            value={values[schema]}
            slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoneyOutlinedIcon />
                    </InputAdornment>
                  ),
                },
                formHelperText: {
                  sx: {
                      position: 'absolute',
                      bottom: 0,
                      transform: 'translate(0%,100%)'
                  }
              }
              }}
            sx={{
                gridArea: schema
            }}
            error={errors[schema] && touched[schema]}
            helperText={(errors[schema] && touched[schema]) && errors[schema]}

        />
    )
}