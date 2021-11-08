import classes from "./SecondFooterItem.module.css";

const SecondFooterItem = () => {
  return (
    <div className="d-none-mobile">
      <h3 className={classes.h3}>Discover</h3>
      <ul className={classes.ul}>
        <li>
          <a href="https://www.fossilgroup.com/">Fossil Group</a>
        </li>
        <li>
          <a href="https://www.fossil.com/en-in/make-time-for-good/">
            Make Time For Good
          </a>
        </li>
        <li>
          <a href="https://www.fossil.com/en-in/fossil-foundation/">
            Fossil Foundation
          </a>
        </li>
        <li>
          <a href="https://www.fossilgroup.com/brands/">About Us</a>
        </li>
        <li>
          <a href="http://www.fossilgroup.com/careers/">Careers</a>
        </li>
        <li>
          <a href="https://www.fossil.com/en-in/store-locator.html">
            Store Locator
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SecondFooterItem;
