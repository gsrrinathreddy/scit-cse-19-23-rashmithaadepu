import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-icon%2Fuser_318-219688.jpg&tbnid=KkeKd_wEu-7m2M&vet=12ahUKEwjS8s3Im4H-AhWiX3wKHTByASUQMygHegUIARDvAQ..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fwoman-avatar%2F23&docid=6qufQpo6b36BrM&w=512&h=512&itg=1&q=professional%20female%20avatar&hl=en&ved=2ahUKEwjS8s3Im4H-AhWiX3wKHTByASUQMygHegUIARDvAQ" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institute of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                67% CGPA
              </Typography>
              {" — B.Tech,Computer Science and Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ravindra" src= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F137-1370168_professional-clipart-female-avatar-circle-hd-png-download.png&tbnid=GVyqXGoYiHlQYM&vet=12ahUKEwjS8s3Im4H-AhWiX3wKHTByASUQMygPegUIARCBAg..i&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FmiiJii_professional-clipart-female-avatar-circle-hd-png-download%2F&docid=3pG2GSzw7iarXM&w=860&h=681&q=professional%20female%20avatar&hl=en&ved=2ahUKEwjS8s3Im4H-AhWiX3wKHTByASUQMygPegUIARCBAg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ravindra Girls Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                94% CGPA
              </Typography>
              {" — Intermediate,MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Vijaya sai" src ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F4%2F736%2Fpng-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png&tbnid=yeo_BwDKcimFDM&vet=12ahUKEwjS8s3Im4H-AhWiX3wKHTByASUQMygNegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-agvlo&docid=Sz7xwJo_qBCJ0M&w=360&h=360&q=professional%20female%20avatar&hl=en&ved=2ahUKEwjS8s3Im4H-AhWiX3wKHTByASUQMygNegUIARD9AQ" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Vijaya Sai Central High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                88% CGPA
              </Typography>
              {' — SSC'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}