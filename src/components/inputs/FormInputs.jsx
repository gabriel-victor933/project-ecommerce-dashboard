/* eslint-disable react/prop-types */
import ColorInput from "./ColorInput";
import CurrencyInput from "./CurrencyInput";
import ListInput from "./ListInput";
import NumberInput from "./NumberInput";
import SelectInput from "./SelectInput";
import SwitchInput from "./SwitchInput";
import TextInput from "./TextInput";

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