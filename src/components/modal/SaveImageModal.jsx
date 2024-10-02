import { Modal, Grid2, Box, IconButton } from "@mui/material";
import ActionConfirmationPanel from "../actionsComponents/ActionConfirmationPanel";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import useAppContext from "../../hooks/useAppContext";

// eslint-disable-next-line react/prop-types
export default function SaveImageModal({ open, handleClose }) {

    const { setFeedbackMessage } = useAppContext()

    const [img, setImg] = useState(null)
    const [url, setUrl] = useState(null)

    function handleUpload(e){
        const file = e.target.files[0];
        
        if(file.type != "image/webp"){
            setFeedbackMessage("ERRO: Imagem de ser do tipo .webp!",true)
            return
        }

        const url = URL.createObjectURL(file)

        setImg(file)
        setUrl(url)
    }

    function cancelAction(){
        setImg(null)
        setUrl(null)
        handleClose()
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0,0,0,0.1)',
                }
            }}
        >
            <Grid2
                sx={{
                    position: 'fixed',
                    top: '40%',
                    right: '50%',
                    transform: 'translate(50%,-50%)',
                    borderRadius: '20px',
                    border: '1px solid #F1F1F3',
                    p: '20px',
                    bgcolor: 'absolute.white',
                    width: '400px',
                    height: '400px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        flexGrow: 1,
                        bgcolor: img == null ? 'white.90' : 'white.99',
                        borderRadius: '20px',
                        backgroundImage: `url(${url})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        //mistura a cor de fundo da imagem com a da div;
                        backgroundBlendMode: 'darken',
                        display: 'grid',
                        placeItems: 'center'
                    }}
                >
                    <IconButton
                        component="label"
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                        }}
                    >
                        <AddPhotoAlternateIcon
                            sx={{
                                fontSize: '180px',
                                color: img == null ? 'grey.30' : 'white.95',
                                opacity: img == null ? '1' : '0.3'
                            }}
                        />
                        <input
                            accept="image/*"
                            type="file"
                            hidden
                            onChange={handleUpload}
                        />
                    </IconButton>
                            
                </Box>
                <ActionConfirmationPanel
                    loading={false}
                    disabledConfirm={img == null}
                    confirmAcition={() => alert('Imagem Salva')}
                    cancelAction={cancelAction}
                    
                />
                
            </Grid2>
            
        </Modal>
    )
}