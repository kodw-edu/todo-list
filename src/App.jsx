import './App.css';
import { Box, Button, Checkbox, Divider, IconButton, List, ListItem, ListItemText, TextField } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { useState } from 'react';

function App() {
  const [itemList, setItemList] = useState([]);
  const [textFieldValue, setTextFieldValue] = useState("");
  return (
    <>
      <h1>Todo List</h1>
      <Box display="flex" flexDirection="row" justifyContent={['space-between']}>
        <TextField
          fullWidth
          hiddenLabel
          label="Search field"
          type="search"
          variant="standard"
          onChange={(e) => {
            // Todo: use setTextFieldValue
          }}
        />
        <Box display="flex" paddingInlineStart="14px" paddingTop="10px">
          <Button onClick={() => {
            // Todo
          }} variant='contained'>Add</Button>
        </Box>
      </Box>
      <Divider />
      <List>
        {itemList.map((e, i) => {
          return (
            <div key={i}>
              <ListItem
                secondaryAction={
                  <IconButton onClick={() => {
                    // Todo: use filter function
                  }} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                  <Checkbox />
                <ListItemText
                  primary={e.title}
                />
              </ListItem>
              <Divider />
            </div>
          )
        })}

      </List>
    </>
  )
}

export default App
