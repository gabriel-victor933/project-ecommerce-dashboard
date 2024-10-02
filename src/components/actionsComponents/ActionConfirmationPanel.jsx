import {Grid2, Button} from '@mui/material'

// eslint-disable-next-line react/prop-types
export default function ActionConfirmationPanel({loading, confirmAction, cancelAction, disabledCancel = false, disabledConfirm = false}){

    return (
        <Grid2
        sx={{
            display: 'flex',
            mt: '20px',
            justifyContent: 'flex-end',
            gap: '10px'
        }}
    >
        <Button 
            onClick={cancelAction}
            disabled={loading || disabledCancel}
            variant='outlined' 
            color='primary' 
            sx={{bgcolor: 'absolute.white'}}
        >
            Voltar
        </Button>
        <Button 
            variant='contained' 
            color='secondary' 
            onClick={confirmAction }
            disabled={loading || disabledConfirm}
        >
            Salvar
        </Button>
    </Grid2>
    )
}