import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { createItem, updateItem } from '../graphql/mutations';
import { listItems } from "../graphql/queries";
import { Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Supplies() {
    const [items, setItems] = useState([]);

    const [open, setOpen] = useState(false);

    const fetchItems = async () => {
        try {
          const itemData = await API.graphql(graphqlOperation(listItems));
          const items = itemData.data.listItems.items;
    
          setItems(items);
        } catch (err) {
          console.log('error fetching items', err);
        }
      };


      

    return (
        <div className="supplies">
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand-row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
        </div>
    )
}

export default withAuthenticator(Supplies);