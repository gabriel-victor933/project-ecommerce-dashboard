/* eslint-disable react/prop-types */
import CurrencyInput from "./inputs/CurrencyInput";
import NumberInput from "./inputs/NumberInput";
import SelectInput from "./inputs/SelectInput";
import TextInput from "./inputs/TextInput";

export default function FormInputs(props){

    switch(props.type){
        case 'text': return <TextInput {...props}/>
        case 'number': return <NumberInput {...props}/>
        case 'currency': return <CurrencyInput {...props}/>
        case 'select': return <SelectInput {...props}/>
    }
}