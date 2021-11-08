import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import classes from "./MobileAccordion.module.css";

export default function SimpleAccordion() {
  return (
    <div
      style={{
        marginBottom: "1rem",
        marginLeft: "-.2rem",
      }}
    >
      <Accordion>
        <AccordionSummary
          sx={{
            pl: {
              xs: 1,
            },
            color: "#242424",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Discover</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            pl: {
              xs: 0.5,
            },
            color: "#242424",
          }}
        >
          <Typography>
            <ul className={classes.ul}>
              <li>Fossil Group</li>
              <li>Make Time For Good</li>
              <li>Fossil Foundation</li>
              <li>About us</li>
              <li>careers</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{
            pl: {
              xs: 1,
            },
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Coustomer Care</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            pl: {
              xs: 0.5,
            },
            color: "#242424",
            fontWeight: 500,
          }}
        >
          <Typography>
            <ul className={classes.ul}>
              <li>Order Status</li>
              <li>Warranty & Repairs</li>
              <li>Watch Care & Instructions</li>
              <li>Product Registration</li>
              <li>FAQ</li>
              <li>ADA Statement - Fossil</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
