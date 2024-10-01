/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Grid2, Typography } from "@mui/material";
import { Formik } from "formik";
import FormInputs from "../components/FormInputs";
import { addProductSchema } from "../utils/validationSchemas";
import useAppContext from "../hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import useFetch from "../hooks/useFetch";
import { postData } from "../services/api";

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
        schema: 'typeId',
        options: []
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

    const [loading, setLoading] = useState(false)
    const [inputs, setInputs] = useState(formInputs)

    const { setFeedbackMessage } = useAppContext()

    const {data, error, isLoading} = useFetch('/product-type')

    const nav = useNavigate()

    useEffect(() => {

        if(data){
            inputs[3].options = data.map((productType) => ( {label: productType.type, value: productType.id }))
            
            setInputs(inputs)
        }

    }, [data])

    useEffect(() => {

        if(error){
            setFeedbackMessage("Erro ao carregar tipo de produto!",true)
        }

    }, [error])

    async function handleSubmit(values){

        try {
            setLoading(true)
            const formatedPrice = parseFloat(values.price)*100

            console.log(values)

            await postData('/products',{...values,price: formatedPrice})

            setFeedbackMessage('Produto Adicionado com Sucesso',false)

        } catch (e) {
            console.log(e)
            setFeedbackMessage("Erro ao salvar produto",true)

        } finally {

            setLoading(false)

        }

    }

    return (
        <Formik
            validationSchema={addProductSchema}
            initialValues={{
                name: '',
                material: '',
                price: '',
                typeId: '',
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
                            gridTemplateAreas: '"name material price" "typeId category ." "features features ."',
                            alignContent: 'start',
                            alignItems: 'center',
                            columnGap: '20px',
                            rowGap: '30px',
                            p: '20px',
                            bgcolor: 'absolute.white',
                        }}
                    >
                        {inputs.map((input,i) => <FormInputs 
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
                            disabled={loading || isLoading}
                            variant='outlined' 
                            color='primary' 
                            sx={{bgcolor: 'absolute.white'}}
                            onClick={() => nav(-1)}
                        >
                            Voltar
                        </Button>
                        <Button 
                            variant='contained' 
                            color='secondary' 
                            onClick={props.handleSubmit}
                            disabled={loading || isLoading}
                        >
                            Salvar
                        </Button>
                    </Grid2>
                </>
            )}

        </Formik>
    )
}