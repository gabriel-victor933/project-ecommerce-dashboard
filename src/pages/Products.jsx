import { Grid2, Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

export default function Products(){

    const nav = useNavigate()

    const products = [1,2,3,4,5,6,7,8]

    return (
        <Grid2
            sx={{
                pt: '30px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridAutoRows: '200px',
                gap: '20px',
                position: 'relative',
                minHeight: '100%',
            }}
        >
            {products.map((product,i) => (
                <Box
                    key={i}
                    sx={{
                        minHeight: '200px',
                        borderRadius: '20px',
                        border: '1px solid #F1F1F3',
                        p: '10px',
                        bgcolor: 'absolute.white',
                    }}
                >
                    <Typography variant='h4'>
                        produto {product}
                    </Typography>
                </Box>
            ))}
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
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                }}
            >
                <AddIcon sx={{fontSize: '40px', color: '#1A1A1A'}}/>
            </Box>
        </Grid2>
    )
}