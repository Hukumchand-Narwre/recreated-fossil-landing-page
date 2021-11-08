import classes from "./NavHeader.Module.css";
const NavHeader = () => {
  return (
    <div className={classes["nav-header"]}>
      <img
        className={classes["logo-2"]}
        src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dw2fc0c877/images/rope-logo.png"
        alt="logo"
      />
      <div className={classes.links}>
        <ul className={`${classes["additional-link"]} ul`}>
          <li>
            <a href="#0">Womens</a>
          </li>
          <li>
            <a href="#0">Mens</a>
          </li>
          <li>
            <a href="#0">Watches</a>
          </li>
          <li>
            <a href="#0">SmartWatches</a>
          </li>

          <li>
            <a href="#0">Bags</a>
          </li>
          <li>
            <a href="#0">Wallets</a>
          </li>
          <li>
            <a href="#0">Jewellery</a>
          </li>
          <li>
            <a href="#0">Gifts</a>
          </li>
          <li>
            <a href="#0">sale</a>
          </li>
          <li>
            <a href="#0">Collectors Club</a>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <a href="#0">
              <img
                className={classes.cart}
                src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dwb7b8f757/images/svg-icons/search-desktop.svg"
                alt="cart"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavHeader;
