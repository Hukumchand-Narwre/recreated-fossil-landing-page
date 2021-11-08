import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const DrawerComponent = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  const list = (anchor) => (
    <Box
      sx={{
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : anchor === "right"
            ? 250
            : 350,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "WOMENS",
          "MENS",
          "WATCHES",
          "SMARTWATCHES",
          "WALLETS",
          "JEWELRY",
          "GIFTS",
          "SALE",
          "COLLECTORS CLUB",
        ].map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemText
                sx={{
                  color: "#242424",
                  fontWeight: 500,
                  fontFamily: "Libre Franklin",
                }}
                disableTypography={true}
                primary={text}
              />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <a style={{ marginRight: "1rem" }} href="#0" onClick={toggleDrawer(true)}>
        <img
          src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dw7da1e12f/images/svg-icons/menu.svg"
          alt="cart"
        />
      </a>
      <Drawer
        anchor={props.anchor}
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        {list(props.anchor)}
      </Drawer>
    </div>
  );
};
export default DrawerComponent;
