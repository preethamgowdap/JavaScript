import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type CardItem = {
  id: number;
  title: string;
  description: string;
};

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<number>();

  const toggleDrawer = (open: boolean) => () => {
    setIsOpen(open);
  };

  const cards: CardItem[] = [
    {
      id: 1,
      title: "Plants",
      description: "Plants are essential for all life.",
    },
    {
      id: 2,
      title: "Animals",
      description: "Animals are a part of nature.",
    },
    {
      id: 3,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
    },
    {
      id: 4,
      title: "Water",
      description: "Water is crucial for all living beings.",
    },
    {
      id: 5,
      title: "Air",
      description: "Air supports breathing and life.",
    },
    {
      id: 6,
      title: "Earth",
      description: "Earth provides habitat and resources.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      <AppBar
        position="fixed"
        color="inherit"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ position: "relative" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={toggleDrawer(!isOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            color="black"
            noWrap
            component="div"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)", // ✅ perfect center
            }}
          >
            HEADING NEWS
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {/*  Cards Section */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 2fr)", // 3 cards per row
          gap: 2,
          p: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card key={card.id} sx={{ aspectRatio: "0.5 / 0.5" /* square */ }}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/*  Left-side Drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 240,
            boxSizing: "border-box",
            marginTop: "64px",
          },
        }}
      />
    </Box>
  );
};

export default App;
