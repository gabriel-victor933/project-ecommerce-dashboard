import { Grid2, Snackbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from "react-router-dom";
import useAppContext from "../hooks/useAppContext";
import CheckIcon from '@mui/icons-material/Check';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Main(){

    const {snackBar, handleCloseSnackBar} = useAppContext()

    const nav = useNavigate()

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
                    borderRight: '1px solid #E4E4E7',
                    bgcolor: 'white.97',
                    p: '10px',
                    gap: '20px',
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px',
                }}
            >
                <Typography variant='h1' textAlign='center' mb='150px'>
                    Klothink
                </Typography>
                <Typography 
                    onClick={() => nav('/products')}
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
                    onClick={() => nav('/stock')}
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
            <Grid2
                p={'10px'}
                bgcolor={'white.99'}
            >
                <Outlet />
            </Grid2>
            <Snackbar 
                open={snackBar.open}
                autoHideDuration={2000}
                onClose={handleCloseSnackBar}
                message={snackBar.message}
                action={snackBar.error ? <CloseOutlinedIcon /> : <CheckIcon />}
                sx={{
                    width: '350px',
                    '& .MuiPaper-root': {
                        backgroundColor:'grey.15',
                        fontSize: '16px',
                    }
                }}
            />
        </Grid2>
    )
}