/* eslint-disable react/prop-types */
import { Button, Grid2, Typography } from "@mui/material";
import { Formik } from "formik";
import FormInputs from "../components/FormInputs";
import { addProductSchema } from "../utils/validationSchemas";
import postData from "../services/api";
import useAppContext from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

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
    {
        label: 'Tipo do Produto',
        type: 'select',
        schema: 'type',
        options: [
            {
                label: 'Casual',
                value: 'Casual'
            },
            {
                label: 'Formal',
                value: 'Formal'
            },
            {
                label: 'Party',
                value: 'Party'
            },
            {
                label: 'Bussines',
                value: 'Bussines'
            },
        ]
    },
    {
        label: 'Categoria do Produto',
        type: 'select',
        schema: 'category',
        options: [
            {
                label: 'Menswear',
                value: 'Menswear'
            },
            {
                label: 'Womenswear',
                value: 'Womenswear'
            },
            {
                label: 'Kidswear',
                value: 'Kidswear'
            },

        ]
    },
    {
        label: 'Caracteristicas do Produto',
        type: 'list',
        schema: 'features',
    },
]

export default function AddProduct() {

    const { setFeedbackMessage } = useAppContext()

    const nav = useNavigate()

    async function handleSubmit(values){
        try {

            const url = `${import.meta.env.VITE_BASE_URL}/products`

            const formatedPrice = parseFloat(values.price)*100

            await postData(url,{...values,price: formatedPrice})
            
            setFeedbackMessage('Produto Adicionado com Sucesso',false)

            nav('/products')
            
        } catch (e) {
            console.log(e)
            setFeedbackMessage('Erro ao adicionar produto',true)
        }
    }

    return (
        <Formik
            validationSchema={addProductSchema}
            initialValues={{
                name: '',
                material: '',
                price: '',
                type: '',
                category: '',
                features: []
            }}
            onSubmit={handleSubmit}
        >
            {props => (
                <>
                    <Typography variant='h2' my={'15px'}>
                        Adicionar Produto
                    </Typography>
                    <Grid2
                        sx={{
                            
                            borderRadius: '20px',
                            border: '1px solid #F1F1F3',
                            minHeight: '400px',
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gridTemplateRows: 'repeat(3,auto)',
                            gridTemplateAreas: '"name material price" "type category ." "features features ."',
                            alignContent: 'start',
                            alignItems: 'center',
                            columnGap: '20px',
                            rowGap: '30px',
                            p: '20px',
                            bgcolor: 'absolute.white',
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
                            justifyContent: 'flex-end',
                            gap: '10px'
                        }}
                    >
                        <Button variant='outlined' color='primary' sx={{bgcolor: 'absolute.white'}}>
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