import { Grid2, Skeleton, Typography, Box, IconButton, Button, Divider } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import useAppContext from "../hooks/useAppContext";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import StockForms from "../components/stock/StockForms";
import StockCard from "../components/stock/StockCard";

export default function ViewProduct() {

    const [openForms, setOpenForms] = useState(false)

    const nav = useNavigate()

    const { setFeedbackMessage } = useAppContext()

    const { id } = useParams()

    const { data, error, isLoading, mutate } = useFetch(`/products/${id}`,{revalidateOnFocus: true})

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

    if (error) {
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

    return (
        <Grid2
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                py: '20px'
            }}
        >
            <Grid2
                sx={{
                    borderRadius: '20px',
                    border: '1px solid #F1F1F3',
                    p: '20px',
                    bgcolor: 'absolute.white',
                    minHeight: '100px'
                }}
            >
                <IconButton onClick={() => nav(-1)} disabled={isLoading} sx={{ color: 'grey.15' }}>
                    <KeyboardBackspaceIcon />
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
            <Divider />
            {data?.stocks.map((stock, i) => (
                <StockCard key={i} {...stock} mutate={mutate} />
            ))}
            {openForms ?
                (
                    <StockForms 
                        productId={id} 
                        closeAction={() => setOpenForms(false)} 
                        mutate={mutate}
                    />
                ) : (
                    <Grid2
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            borderRadius: '20px',
                            border: '1px solid #E4E4E7',
                            bgcolor: 'white.95',
                        }}
                    >
                        <Button
                            onClick={() => setOpenForms(true)}
                            sx={{
                                width: '100%',
                                fontSize: '40px !important',
                                fontWeight: '700',
                                color: 'grey.30',
                                py: '0px',
                                lineHeight: '60px'
                            }}
                        >
                            +
                        </Button>

                    </Grid2>
                )}


        </Grid2>
    )
}