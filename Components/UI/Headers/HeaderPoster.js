import classes from "./HeaderPoster.module.css";
import SimpleSlider from "../Slider/SimpleSlider";
import NavHeader from "./NavHeader";
import { useState, useEffect } from "react";

const list1 = (
  <>
    <li>
      <a href="#0">Our Responsibility</a>
    </li>
    <li>
      <a href="#0">
        Ship To
        <span className={classes.flag}></span>
      </a>
    </li>
    <li>
      <a href="#0">Order Status</a>
    </li>
    <li>
      <a href="#0">Sign in</a>
    </li>
  </>
);

const HeaderPoster = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const showInputHandler = () => {
    setShowInput(!showInput);
  };
  const list2 = (
    <>
      <li>
        <a className={classes["margin-1"]} href="#0" onClick={showInputHandler}>
          <img
            src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dwb7b8f757/images/svg-icons/search-desktop.svg"
            alt="cart"
          />
        </a>
      </li>

      <li>
        <a className={classes["margin-1"]} href="#0">
          <img
            src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dwe0bb1904/images/svg-icons/customer.svg"
            alt="cart"
          />
        </a>
      </li>
    </>
  );

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id={classes["fixed-wrapper"]}>
      <div
        className={`${classes["header-banner"]}  ${
          scrollPosition >= 201 ? classes["padding-b"] : ""
        }`}
      >
        <div className={classes.container}>
          <div className={classes.row}>
            <SimpleSlider scrollPosition={scrollPosition} />
            <div
              className={` ${scrollPosition <= 200 ? classes.opac : ""} ${
                classes["logo-container"]
              } `}
            >
              <a href="#0">
                <img
                  className={classes.logo}
                  src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dw2fc0c877/images/rope-logo.png"
                  alt="logo"
                />
              </a>
            </div>

            <div className={classes["margin-l-auto"]}>
              <ul className={`${classes["additional-link"]} ul`}>
                {scrollPosition <= 200 && list1}
                {scrollPosition >= 201 && list2}

                <li>
                  <a href="#0">
                    <img
                      className={classes.cart}
                      src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dwc353ff75/images/svg-icons/bag-empty.svg"
                      alt="cart"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {scrollPosition <= 200 && <NavHeader />}
        </div>
      </div>
    </div>
  );
};
export default HeaderPoster;
