/* eslint-disable react/prop-types */
import { Grid2, IconButton, List, ListItem, TextField, Typography, ListItemIcon } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { FieldArray } from "formik";
import DeleteIcon from '@mui/icons-material/Delete';
import AttachmentIcon from '@mui/icons-material/Attachment';

export default function ListInput({ label, schema, values, subSchema }) {

    const [text, setText] = useState('')

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
                    />
                    <IconButton size='large' onClick={() => helpers.push({[subSchema]: text})}>
                        <AddIcon />
                    </IconButton>
                    <List>
                        {values[schema].map((item,i) => (
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
                                 {item[subSchema]}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid2>
            )}
        />


    )
}