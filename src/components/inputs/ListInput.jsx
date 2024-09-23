/* eslint-disable react/prop-types */
import { Grid2, IconButton, List, ListItem, TextField, Typography, ListItemIcon } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { FieldArray } from "formik";
import DeleteIcon from '@mui/icons-material/Delete';
import AttachmentIcon from '@mui/icons-material/Attachment';

export default function ListInput({ label, schema, values, subschema, errors, setFieldError, setFieldTouched, touched }) {

    const [text, setText] = useState('')

    function handleAddItem(push){

        if(text.length < 5) {
            setFieldError(schema,'Este item é obrigatorio')
            setFieldTouched(schema,true)
            return
        }

            
        push({ [subschema]: text })
    }

    return (
        <FieldArray
            name={schema}
            render={(helpers) => (
                <Grid2
                    sx={{
                        gridArea: schema
                    }}
                >
                    <TextField
                        type="text"
                        variant="outlined"
                        label={label}
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        error={errors[schema] && touched[schema]}
                        helperText={(errors[schema] && touched[schema]) && errors[schema]}
                        slotProps={{
                            formHelperText: {
                                sx: {
                                    position: 'absolute',
                                    bottom: 0,
                                    transform: 'translate(0%,100%)'
                                }
                            }
                        }}
                    />
                    <IconButton size='large' onClick={() => handleAddItem(helpers.push)}>
                        <AddIcon />
                    </IconButton>
                    <List>
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
                                    {item[subschema]}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid2>
            )}
        />


    )
}