import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import configuration from '../features/configuration.json';
import items from '../features/items.json';
import styled from 'styled-components';
import { Typography } from '@mui/material';


interface Props {
  days: number;
}

export default function CheckboxList(props: Props) {
  const [checked, setChecked] = React.useState([0]);

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

  return (
    <Container>
      <Typography align="center" sx={{padding:"20px 0px 0px 0px", margin:"0px", fontWeight:"bold"}}>
        Pakkeliste
      </Typography>
      <List sx={{ width: '100%', maxWidth: configuration.maxWidth, margin: "0px" }}>
        {items.clothes.map((item, index) => {
          const labelId = `checkbox-list-label-${item.name}`;

          return (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
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
      <Typography align="center" sx={{padding:"20px 0px 0px 0px", margin:"0px", fontWeight:"bold"}}>
        Toilettaske
      </Typography>
      <List sx={{ width: '100%', maxWidth: configuration.maxWidth, margin: "0px" }}>
        {items.toiletries.map((item, index) => {
          const labelId = `checkbox-list-label-${item.name}`;

          return (
            <ListItem
              key={index+7}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
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
