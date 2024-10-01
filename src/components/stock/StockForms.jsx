/* eslint-disable react/prop-types */
import { Formik } from "formik";
import { addStockSchema } from "../../utils/validationSchemas";
import FormInputs from "../FormInputs";
import { Grid2,Button } from "@mui/material";
import { useState } from "react";

const formInputs = [
    {
        label: 'Insira a cor do produto',
        type: 'color',
        schema: 'color',
    },
    {
        label: 'qtd tamanho S',
        type: 'number',
        schema: 's'
    },
    {
        label: 'qtd tamanho M',
        type: 'number',
        schema: 'm'
    },
    {
        label: 'qtd tamanho L',
        type: 'number',
        schema: 'l'
    },
    {
        label: 'qtd tamanho XL',
        type: 'number',
        schema: 'xl'
    },
    {
        label: 'qtd tamanho XXL',
        type: 'number',
        schema: 'xxl'
    },
]

export default function StockForms() {

    const [loading, setLoading] = useState(false)

    return (
        <Formik
            validationSchema={addStockSchema}
            initialValues={{
                color: '#000000',
                s: 0,
                m: 0,
                l: 0,
                xl: 0,
                xxl: 0,
            }}
            onSubmit={(values) => console.log(values)}
        >
            {props => (
                <>
                    <Grid2
                        sx={{
                            mt: '20px',
                            borderRadius: '20px',
                            border: '1px solid #F1F1F3',
                            minHeight: '120px',
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                            gridTemplateRows: 'repeat(1,auto)',
                            gridTemplateAreas: '"color s m l xl xxl"',
                            alignContent: 'start',
                            alignItems: 'center',
                            columnGap: '20px',
                            rowGap: '30px',
                            p: '20px',
                            bgcolor: 'absolute.white',
                        }}
                    >
                        {formInputs.map((input, i) => <FormInputs
                            key={i}
                            {...input}
                            {...props}
                        />)}
                    </Grid2>
                    <Grid2
                        sx={{
                            display: 'flex',
                            mt: '20px',
                            justifyContent: 'flex-end',
                            gap: '10px'
                        }}
                    >
                        <Button 
                            disabled={loading}
                            variant='outlined' 
                            color='primary' 
                            sx={{bgcolor: 'absolute.white'}}
                        >
                            Voltar
                        </Button>
                        <Button 
                            variant='contained' 
                            color='secondary' 
                            onClick={props.handleSubmit}
                            disabled={loading}
                        >
                            Salvar
                        </Button>
                    </Grid2>
                </>


            )}
        </Formik>
    )
}