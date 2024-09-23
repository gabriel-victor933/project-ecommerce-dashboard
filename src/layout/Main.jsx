import { Grid2, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Main(){

    return (
        <Grid2
            sx={{
                display: 'grid',
                gridTemplateColumns: '2fr 8fr',
                width: '100%',
                height: '100vh',
            }}
        >
            <Grid2
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRight: '1px solid #F1F1F3',
                    bgcolor: 'white.97',
                    p: '10px',
                    gap: '10px',
                }}
            >
                <Typography variant='h1' textAlign='center' mb='150px'>
                    Klothink
                </Typography>
                <Typography 
                    variant='h2'
                    textAlign='center'
                    sx={{
                        borderBottom: '1px solid #262626',
                        cursor: 'pointer',
                    }}
                >
                    Produtos
                    <ArrowRightAltIcon sx={{verticalAlign: 'middle'}}/>
                </Typography>
                <Typography
                    variant='h2'
                    textAlign='center'
                    sx={{
                        borderBottom: '1px solid #262626',
                        cursor: 'pointer',
                    }}
                >
                    Stock
                    <ArrowRightAltIcon sx={{verticalAlign: 'middle'}}/>
                </Typography>
            </Grid2>
            <Grid2>
                <Outlet />
            </Grid2>
        </Grid2>
    )
}