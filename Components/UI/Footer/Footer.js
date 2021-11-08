import CopyrightSection from "./CopyrightSection";
import FirstFooterItem from "./FirstFooterItem";
import classes from "./Footer.module.css";
import FourthFooterItem from "./FourthFooterItem";
import SecondFooterItem from "./SecondFooterItem";
import ThirdFooterItem from "./ThirdFooterItem";
import SimpleAccordion from "../MobileAccordion/MobileAccordion";
import Media from "react-media";
const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.footer}>
          <div className={classes.container}>
            <div className={classes["footer-row"]}>
              <FirstFooterItem />
              <SecondFooterItem />
              <Media queries={{ medium: { maxWidth: 760 } }}>
                {(matches) => (matches.medium ? <SimpleAccordion /> : "")}
              </Media>
              <ThirdFooterItem />
              <FourthFooterItem />
            </div>
          </div>
        </div>
      </footer>
      <Media queries={{ medium: { minWidth: 760 } }}>
        {(matches) => (matches.medium ? <CopyrightSection /> : "")}
      </Media>
    </>
  );
};
export default Footer;
