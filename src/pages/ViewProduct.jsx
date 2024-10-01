import { Grid2, Skeleton, Typography, Box, IconButton } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import useAppContext from "../hooks/useAppContext";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function ViewProduct() {

    const nav = useNavigate()

    const { setFeedbackMessage } = useAppContext()

    const { id } = useParams()

    const { data, error, isLoading } = useFetch(`/products/${id}`)

    useEffect(() => {
        if (error) {
            setFeedbackMessage("Erro ao buscar produto", true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])

    if (isLoading) {
        return (
            <Skeleton
                variant="rectangular"
                animation="wave"
                width={'100%'}
                height={200}
                sx={{
                    borderRadius: '20px',
                    bgcolor: 'white.90'
                }} />
        )
    }

    if(error){
        return (
            <Grid2
                sx={{
                    borderRadius: '20px',
                    border: '1px solid #F1F1F3',
                    p: '20px',
                    bgcolor: 'absolute.white',
                    minHeight: '100px'
                }}
            >
                <Typography variant='h2' textAlign='center'>
                    Produto não encontrado...
                </Typography>
            </Grid2>
        )
    }
    console.log(data)
    return (
        <>
            <Grid2
                sx={{
                    borderRadius: '20px',
                    border: '1px solid #F1F1F3',
                    p: '20px',
                    bgcolor: 'absolute.white',
                    minHeight: '100px'
                }}
            >
                <IconButton onClick={() => nav(-1)}>
                    <KeyboardBackspaceIcon sx={{color: 'grey.15'}}/>
                </IconButton>
                <Typography variant='h1'>
                    {data.name}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '30px',
                        my: '20px'
                    }}
                >
                    <Typography variant='h3' fontWeight={'400'}>
                        <strong>Material:</strong> {data.material}
                    </Typography>
                    <Typography variant='h3' fontWeight={'400'}>
                        <strong>type:</strong> {data.productType?.type}
                    </Typography>
                    <Typography variant='h3' fontWeight={'400'}>
                        <strong>category:</strong> {data.category}
                    </Typography>
                    <Typography variant='h3' fontWeight={'400'}>
                        <strong>price:</strong> R$ {data.price / 100}
                    </Typography>
                </Box>

            </Grid2>
            <Grid2
                sx={{
                    mt: '20px',
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '20px',
                    border: '1px solid #E4E4E7',
                    bgcolor: 'white.95',
                }}
            >
                    <Typography fontSize={'50px'} fontWeight={'700'} color={'grey.30'} sx={{cursor: 'pointer'}}>
                        +
                    </Typography>
            </Grid2>
        </>
    )
}