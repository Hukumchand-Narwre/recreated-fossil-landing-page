import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";

import "@reach/accordion/styles.css";
import { useState } from "react";
import classes from "./Accordio.module.css";

function Example() {
  const [state, setState] = useState(true);
  const accordionClick = () => {
    setState(!state);
  };
  const buttonClass = `${classes["accordio-button-reverse"]} ${classes["button-position"]}`;
  const text = `${state ? "READ MORE" : "READ LESS"}`;
  return (
    <Accordion
      className={`${state ? "" : classes["accordio-item"]}`}
      collapsible
    >
      <AccordionItem>
        <h3>
          <AccordionButton
            onClick={accordionClick}
            className={`${state ? classes["accordio-button"] : buttonClass}`}
          >
            {text}
          </AccordionButton>
        </h3>
        <AccordionPanel>
          <h2>WATCH(ING) FOR GREAT LOOKS</h2>
          <p>
            Our eye-catching men’s watches and women’s watches come stylishly
            strapped with leather or merry metallic bands, while our must-have
            bags pair fashion and functionality. Lovely rose gold-tone watches
            for her and handsome Swiss watches for him retain all the qualities
            you love the most in a classic Fossil. Pair them with our covetable
            cuffs, sparkling studs or glamorous necklaces for a look that goes
            from day to night with ease.
          </p>
        </AccordionPanel>
        <AccordionPanel>
          <h2>STYLE FOR MEN AND WOMEN? IT'S IN THE BAG</h2>
          <p>
            Designed to only get better with age, our perfectly portable bags
            and purses feature easy-to-carry silhouettes and long-lasting
            materials to help you tote your tech, news and small accessories
            without compromising on style. Our signature leather in new neutrals
            and vibrant hues captures the richness of each season, while
            showcasing the clean lines of our iconic designs. Tech cases,
            wallets, belts and gifts are playful and practical accessories that
            you’ll carry for years. From classic bags to
            traditional-with-a-twist watches to small accessories and more, our
            collections are created to assure your destination will be a
            celebration.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default Example;
