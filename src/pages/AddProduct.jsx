/* eslint-disable react/prop-types */
import { Button, Grid2 } from "@mui/material";
import { Formik } from "formik";
import FormInputs from "../components/FormInputs";

const formInputs = [
    {
        label: 'Nome do Produto',
        type: 'text',
        schema: 'name'
    },
    {
        label: 'Material do Produto',
        type: 'text',
        schema: 'material'
    },
    {
        label: 'Preço do produto',
        type: 'currency',
        schema: 'price'
    },
]

export default function AddProduct() {

    return (
        <Formik
            initialValues={{
                name: '',
                material: '',
                price: '',
                type: '',
                category: '',
                features: [
                    {
                        feature: ''
                    }
                ]
            }}
            onSubmit={(values) => {
                console.log('VALUES',values)
                alert(JSON.stringify(values))
            }}
        >
            {props => (
                <>
                    <Grid2
                        sx={{
                            mt: '20px',
                            borderRadius: '20px',
                            border: '1px solid #F1F1F3',
                            minHeight: '400px',
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '20px',
                            p: '20px',
                        }}
                    >
                        {formInputs.map((input,i) => <FormInputs 
                                                    key={i}
                                                    {...input}
                                                    {...props}
                                                    />)}
                    </Grid2>
                    <Grid2
                        sx={{
                            display: 'flex',
                            mt: '20px',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button variant='outlined' color='primary' >
                            Voltar
                        </Button>
                        <Button variant='contained' color='secondary' onClick={props.handleSubmit}>
                            Salvar
                        </Button>
                    </Grid2>
                </>
            )}

        </Formik>
    )
}