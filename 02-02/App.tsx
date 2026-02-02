import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(!isOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            HEADING NEWS
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left-side Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { 
            width: 240, 
            boxSizing: 'border-box',
            marginTop: '64px' // Keeps menu below the top bar
          },
        }}
      >
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={toggleDrawer(false)} // Closes when clicking inside the menu
        >
          <List>
            {['News Feed', 'Trending', 'Bookmarks', 'Settings'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default App;
