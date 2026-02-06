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
  CardHeader,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type CardItem = {
  id: number;
  title: string;
  description: string;
  typeOfCard: string;
  
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
      typeOfCard:"reminder",
    },
    {
      id: 2,
      title: "Animals",
      description: "Animals are a part of nature.",
      typeOfCard:"birthday"
    },
    {
      id: 3,
      title: "Humans",
      description: "Humans depend on plants and animals for survival.",
      typeOfCard:"todu"
    },
    {
      id: 4,
      title: "Water",
      description: "Water is crucial for all living beings.",
      typeOfCard:"news"
    },
    {
      id: 5,
      title: "Air",
      description: "Air supports breathing and life.",
      typeOfCard:"reminder"
    },
    {
      id: 6,
      title: "Earth",
      description: "Earth provides habitat and resources.",
      typeOfCard:"birtday"
    },
     {
      id: 7,
      title: "Phone",
      description: "Phone is one of the need for human beings.",
      typeOfCard:"todu"
    },
     {
      id: 8,
      title: "Food",
      description: "Food is a basic need for human beings and animal.",
      typeOfCard:"news"
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
              transform: "translateX(-50%)", //  perfect center
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
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap:2 ,
          p: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card  key={card.id} sx={{ aspectRatio: "50/ 50" /* square */ }}>
            <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"[500] }} aria-label="recipe">
            {card.typeOfCard[0]}
          </Avatar>
        }
        >
        </CardHeader>
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
