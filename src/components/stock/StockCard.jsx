/* eslint-disable react/prop-types */
import { Grid2, Table, TableBody, TableCell, TableHead, Box, Button, IconButton } from "@mui/material";
import SaveImageModal from "../modal/SaveImageModal";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import useAppContext from "../../hooks/useAppContext";
import { deleteData } from "../../services/api";

// eslint-disable-next-line react/prop-types
export default function StockCard({ color, sizes, id, images, mutate }) {

    const { setFeedbackMessage, setGlobalLoading } = useAppContext()

    const [openModal, setOpenModal] = useState(false)

    const sizesMap = {}
    // eslint-disable-next-line react/prop-types
    sizes.forEach((item) => (sizesMap[item.size] = item.quantity))

    function handleClose() {
        setOpenModal(false)
        mutate()
    }

    async function handleDelete(id){
        try {
            setGlobalLoading(true)
            
            await deleteData(`/images/${id}`)

            mutate()

        } catch (error) {
            console.log(error)
            setFeedbackMessage("Erro ao apagar imagem!",true)
        } finally {
            setGlobalLoading(false)
        }
    }

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
            <Table>
                <TableHead>
                    <TableCell align='left'>Color</TableCell>
                    <TableCell align='center'>S</TableCell>
                    <TableCell align='center'>M</TableCell>
                    <TableCell align='center'>L</TableCell>
                    <TableCell align='center'>XL</TableCell>
                    <TableCell align='center'>XXL</TableCell>
                </TableHead>
                <TableBody>
                    <TableCell align='left' sx={{ display: 'flex' }}>
                        {color}
                        <Box
                            sx={{
                                ml: '15px',
                                height: '20px',
                                width: '20px',
                                borderRadius: '50%',
                                bgcolor: color
                            }}
                        >

                        </Box>
                    </TableCell>
                    <TableCell align='center'>{sizesMap['S']}</TableCell>
                    <TableCell align='center'>{sizesMap['M']}</TableCell>
                    <TableCell align='center'>{sizesMap['L']}</TableCell>
                    <TableCell align='center'>{sizesMap['XL']}</TableCell>
                    <TableCell align='center'>{sizesMap['XXL']}</TableCell>
                </TableBody>
            </Table>
            <Grid2
                sx={{
                    mt: '10px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                }}
            >
                {images.map((image, i) => (
                    <Box
                        key={i}
                        sx={{
                            width: '150px',
                            height: '150px',
                            bgcolor: 'white.90',
                            borderRadius: '20px',
                            backgroundImage: `url(${import.meta.env.VITE_BUCKET_URL}/${image.bucketKey})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            //mistura a cor de fundo da imagem com a da div;
                            backgroundBlendMode: 'darken',
                            cursor: 'pointer',


                        }}
                    >

                        <IconButton
                            onClick={() => handleDelete(image.id)}
                            sx={{
                                width: '100%',
                                height: '100%',
                                opacity: '0',
                                borderRadius: '20px',
                                display: 'grid',
                                placeItems: 'center',

                                '&:hover': {
                                    opacity: '1',
                                    backgroundColor: 'rgba(0,0,0,0.3)'
                                }
                            }}
                        >
                            <DeleteIcon
                                sx={{
                                    color: 'white.99',
                                    fontSize: '60px'
                                }}
                            />
                        </IconButton>

                    </Box>
                ))}

                <Box
                    sx={{
                        width: '150px',
                        height: '150px',
                        bgcolor: 'white.90',
                        borderRadius: '20px'
                    }}
                >
                    <Button
                        onClick={() => setOpenModal(true)}
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                            fontSize: '60px',
                            color: 'grey.40'
                        }}
                    >
                        +
                    </Button>
                </Box>
            </Grid2>
            <SaveImageModal
                stockId={id}
                open={openModal}
                handleClose={handleClose}
            />
        </Grid2>
    )
}