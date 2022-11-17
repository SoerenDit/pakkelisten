import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ReadMoreIcon from '@mui/icons-material/Help';

import configuration from '../features/configuration.json';
import items from '../features/items.json';
import styled from 'styled-components';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { useState } from 'react';


interface Props {
  days: number;
  trip: string;
}

export default function CheckboxList(props: Props) {
  const [checked, setChecked] = useState([-1]);
  const [openDialog, setOpenDialog] = useState(-1);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const Container = styled.div`
   background-image: linear-gradient(240deg, rgba(37,37,37,0.2) 0%,transparent 51%),linear-gradient(26deg, rgba(37,37,37,0.2) 0%,transparent 36%),linear-gradient(64deg, rgba(37,37,37,0.2) 0%,transparent 28%),linear-gradient(114deg, rgba(37,37,37,0.2) 0%,transparent 33%),repeating-linear-gradient(146deg, rgba(140,140,140,0.1) 0px,transparent 4px),repeating-linear-gradient(207deg, rgba(140,140,140,0.1) 0px,transparent 4px),repeating-linear-gradient(6deg, rgba(140,140,140,0.1) 0px,transparent 4px),linear-gradient(90deg, rgb(241,194,117),rgb(241,194,117));
   border-radius: 4px;
`;

  let toPack: { name: string; factor: number; additional: number; description: string; }[];

  if(props.trip === "Vandretur") {
    toPack = items.hike;
  } else if (props.trip === "Cykeltur"){
    toPack = items.cycling;
  } else {
    toPack = items.city;
  }

  return (
    <Container>
      <Typography align="center" sx={{padding:"20px 0px 0px 0px", margin:"0px", fontWeight:"bold"}} onClick={() => console.log(props.trip)}>
        Pakkeliste
      </Typography>
      <List sx={{ width: '100%', maxWidth: configuration.maxWidth, margin: "0px" }}>
        {toPack.map((item, index) => {
          const labelId = `checkbox-list-label-${item.name}`;

          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={() => setOpenDialog(index)}>
                  <ReadMoreIcon/>
                </IconButton>
              }
              disablePadding
            >
              <Dialog open={openDialog === index} onClose={() => setOpenDialog(-1)}>
                <DialogTitle>{item.name}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {item.description}
                  </DialogContentText>
                </DialogContent>
              </Dialog>
              <ListItemButton role={undefined} onClick={handleToggle(index)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(index) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primaryTypographyProps={{ fontSize: '16px' }} primary={`${Math.floor(props.days * item.factor + item.additional)} x ${item.name}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
