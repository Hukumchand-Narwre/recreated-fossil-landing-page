import DrawerComponent from "../Drawer/DrawerComponent";
import SimpleSlider from "../Slider/SimpleSlider";
import classes from "./MobileHeader.module.css";
const MobileHeader = () => {
  return (
    <>
      <div className={classes["mobile-header-container"]}>
        <div className={classes["slider-container"]}>
          <SimpleSlider />
        </div>
        <div className={classes["mobile-header"]}>
          <img
            className={classes["logo-2"]}
            src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dw2fc0c877/images/rope-logo.png"
            alt="logo"
          />
          <a href="#0" className={classes.search}>
            <img
              className={classes["search-icon"]}
              src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dwb7b8f757/images/svg-icons/search-desktop.svg"
              alt="cart"
            />
          </a>
          <a href="#0">
            <img
              className={classes["cart-icon"]}
              src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dwc353ff75/images/svg-icons/bag-empty.svg"
              alt="cart"
            />
          </a>
          <DrawerComponent anchor="right" />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
