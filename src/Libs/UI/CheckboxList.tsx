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
import itemSettings from '../features/itemSettings.json';
import styled from 'styled-components';


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


  return (
    <List sx={{ width: '100%', maxWidth: configuration.maxWidth, bgcolor: 'background.paper', borderRadius: configuration.borderRadius, margin: "10px 0px", backgroundColor: "aliceblue" }}>
      {itemSettings.items.map((item, index) => {
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
              <ListItemText id={labelId} primary={`${Math.floor(props.days * item.factor + item.additional)} x ${item.name}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
