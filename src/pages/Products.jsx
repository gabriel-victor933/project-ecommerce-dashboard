import { Grid2, Box, Typography, Skeleton, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import useAppContext from "../hooks/useAppContext";

export default function Products(){

    const { setFeedbackMessage } = useAppContext()

    const { data , error, isLoading } = useFetch('/products')

    useEffect(() => {
        if(error){
            setFeedbackMessage("Erro ao buscar produtos",true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[error])

    const nav = useNavigate()

    return (
        <Grid2
            sx={{
                pt: '30px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                position: 'relative',
                minHeight: '100%',
            }}
        >
            {data?.map((product) => (
                <Box
                    key={product.id}
                    sx={{
                        
                        borderRadius: '20px',
                        border: '1px solid #F1F1F3',
                        p: '20px',
                        bgcolor: 'absolute.white',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}
                >
                    <Typography variant='h2'>
                        {product.name}
                    </Typography>
                    <Typography variant='h4'>
                        <strong>Material:</strong> {product.material}
                    </Typography>
                    <Typography variant='h4'>
                        <strong>type:</strong> {product.type}
                    </Typography>
                    <Typography variant='h4'>
                        <strong>category:</strong> {product.category}
                    </Typography>
                    <Typography variant='h4'>
                        <strong>price:</strong> R$ {product.price/100}
                    </Typography>
                    <Button variant='contained' color='secondary'>
                       + Add Stock
                    </Button>
                </Box>
            ))}
            {isLoading && (
                <>
                    <Skeleton 
                        variant="rectangular" 
                        animation="wave" 
                        width={'100%'} 
                        height={200} 
                        sx={{
                            borderRadius: '20px',
                            bgcolor: 'white.90'
                        }}/>
                        <Skeleton 
                        variant="rectangular" 
                        animation="wave" 
                        width={'100%'} 
                        height={200} 
                        sx={{
                            borderRadius: '20px',
                            bgcolor: 'white.90'
                        }}/>
                </>
                
            )}
            <Box
                onClick={() => nav('add')}
                sx={{
                    border: '1px solid #F1F1F3',
                    width: '60px',
                    height: '60px',
                    bgcolor: '#F1F1F3',
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                }}
            >
                <AddIcon sx={{fontSize: '40px', color: '#1A1A1A'}}/>
            </Box>
        </Grid2>
    )
}