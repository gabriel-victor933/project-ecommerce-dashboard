/* eslint-disable react/prop-types */
import { Grid2, IconButton, List, ListItem, TextField, Typography, ListItemIcon } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { FieldArray } from "formik";
import DeleteIcon from '@mui/icons-material/Delete';
import AttachmentIcon from '@mui/icons-material/Attachment';

export default function ListInput({ label, schema, values, errors, touched }) {

    const [text, setText] = useState('')
    const [localError, setLocalError] = useState('')

    function handleAddItem(push){
        if(text.length < 5) {
            setLocalError('Este Campo de ter no minimo 5 caracteres')
            return
        }
        push(text)
        setText('')
    }

    function handleLocalChange(e){
        const text = e.target.value

        if(text.length >5) setLocalError('')

        setText(text)
    }   

    return (
        <FieldArray
            name={schema}
            render={(helpers) => (
                <Grid2
                    sx={{
                        gridArea: schema,
                    }}

                >
                    <TextField
                        type="text"
                        variant="outlined"
                        name={schema}
                        label={label}
                        onChange={handleLocalChange}
                        value={text}
                        error={(errors[schema] && touched[schema]) || (!!localError) }
                        helperText={(errors[schema] && touched[schema]) && errors[schema] || localError}
                        slotProps={{
                            formHelperText: {
                                sx: {
                                    position: 'absolute',
                                    bottom: 0,
                                    transform: 'translate(0%,100%)'
                                }
                            }
                        }}
                        sx={{
                            width: '75%'
                        }}
                    />
                    <IconButton size='large' onClick={() => handleAddItem(helpers.push)}>
                        <AddIcon />
                    </IconButton>
                    <List sx={{mt: '7px'}}>
                        {values[schema].map((item, i) => (
                            <ListItem
                                key={i}
                                secondaryAction={
                                    <IconButton edge="end" onClick={() => helpers.remove(i)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            >
                                <ListItemIcon>
                                    <AttachmentIcon />
                                </ListItemIcon>
                                <Typography variant='h6'>
                                    {item}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid2>
            )}
        />


    )
}