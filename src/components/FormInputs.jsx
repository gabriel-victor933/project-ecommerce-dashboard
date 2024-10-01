/* eslint-disable react/prop-types */
import ColorInput from "./inputs/ColorInput";
import CurrencyInput from "./inputs/CurrencyInput";
import ListInput from "./inputs/ListInput";
import NumberInput from "./inputs/NumberInput";
import SelectInput from "./inputs/SelectInput";
import SwitchInput from "./inputs/SwitchInput";
import TextInput from "./inputs/TextInput";

export default function FormInputs(props){
    
    switch(props.type){
        case 'text': return <TextInput {...props}/>
        case 'number': return <NumberInput {...props}/>
        case 'currency': return <CurrencyInput {...props}/>
        case 'select': return <SelectInput {...props}/>
        case 'list': return <ListInput {...props}/>
        case 'color': return <ColorInput {...props}/>
        case 'switch': return <SwitchInput {...props}/>
    }
}