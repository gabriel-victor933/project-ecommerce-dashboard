/* eslint-disable react/prop-types */
import { Formik } from "formik";
import { addStockSchema } from "../../utils/validationSchemas";
import FormInputs from "../FormInputs";
import { Grid2,Button } from "@mui/material";
import useAppContext from "../../hooks/useAppContext";
import { postData } from "../../services/api";

const formInputs = [
    {
        label: 'Insira a cor do produto',
        type: 'color',
        schema: 'color',
    },
    {
        label: 'qtd tamanho S',
        type: 'number',
        schema: 'S'
    },
    {
        label: 'qtd tamanho M',
        type: 'number',
        schema: 'M'
    },
    {
        label: 'qtd tamanho L',
        type: 'number',
        schema: 'L'
    },
    {
        label: 'qtd tamanho XL',
        type: 'number',
        schema: 'XL'
    },
    {
        label: 'qtd tamanho XXL',
        type: 'number',
        schema: 'XXL'
    },
    {
        label: 'Modelo principal',
        type: 'switch',
        schema: 'principal'
    }
]

export default function StockForms({ productId, closeAction }) {

    const { setFeedbackMessage, setGlobalLoading, globalLoading } = useAppContext()

    async function handleSubmit(values){
        try {
            setGlobalLoading(true)

            const temp = {...values}

            const color = temp.color
            const principal = temp.principal

            const payload = {
                color,
                principal,
                productId,
                sizes: []
            }

            delete temp.color
            delete temp.principal

            for (const [size, qtd] of Object.entries(temp)) {
                payload.sizes.push({quantity: qtd, size: size})
            }

            await postData('/stock',payload)

            setFeedbackMessage("informações salvas!",false)

            closeAction()
        } catch (error) {
            console.log(error)
            setFeedbackMessage("Erro ao salvar informações de stock!",true)
        } finally {
            setGlobalLoading(false)
        }
    }

    return (
        <Formik
            validationSchema={addStockSchema}
            initialValues={{
                principal: false,
                color: '#000000',
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
                XXL: 0,
            }}
            onSubmit={handleSubmit}
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
                            gridTemplateAreas: '"color S M L XL XXL"',
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
                            onClick={closeAction}
                            disabled={globalLoading}
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
                            disabled={globalLoading}
                        >
                            Salvar
                        </Button>
                    </Grid2>
                </>


            )}
        </Formik>
    )
}