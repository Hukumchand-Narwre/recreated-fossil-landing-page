import classes from "./FirstFooterItem.module.css";

const FirstFooterItem = () => {
  return (
    <div className={classes["footer-item"]}>
      <div className={classes["content-asset"]}>
        <h3 className={classes.h3}>Stay connected</h3>
        <form className={classes.form}>
          <input className={classes.input} placeholder="Enter Email Address" />
          <button type="submit" className={classes.button}>
            <img
              src="https://www.fossil.com/on/demandware.static/Sites-fossil-in-Site/-/default/dw9c689174/images/svg-icons/right-arrow-footer.svg"
              alt="arrow"
            />
          </button>
        </form>
        <p className={classes["p"]}>
          By subscribing to our newsletter you agree to our privacy policy. *
          (restrictions and exclusions apply){" "}
        </p>
        <ul className={classes.ul}>
          <li>
            <a href="https://www.facebook.com/Fossil.IN/">
              <img
                alt=""
                aria-hidden="true"
                src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw2251b987/images/facebook.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/fossil">
              <img
                alt=""
                aria-hidden="true"
                src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw5412fe77/images/twitter.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/fossil">
              <img
                alt=""
                aria-hidden="true"
                src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw49e419b4/images/pinterest.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/fossil.in/">
              <img
                alt=""
                aria-hidden="true"
                src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw2ae5dc56/images/instagram.svg"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/fossil">
              <img
                alt=""
                aria-hidden="true"
                src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw5fa517a1/images/you-tube.svg"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstFooterItem;
