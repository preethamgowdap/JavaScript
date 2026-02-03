import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  Box 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1  }}>
      {/* Top Bar */}
      <AppBar position="fixed" color="inherit" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(!isOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" color='black'noWrap component="div" sx={{position:'absolute',left:'50%'}}>
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
      </Drawer>
    </Box>
  );
};

export default App;
