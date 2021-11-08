import classes from "./ThirdFooterItem.module.css";
const ThirdFooterItem = () => {
  return (
    <div className="d-none-mobile">
      <h3 className={classes.h3}>Customer Care</h3>
      <ul className={classes.ul}>
        <li>
          <a href="https://www.fossilgroup.com/">Order Status</a>
        </li>
        <li>
          <a href="https://www.fossil.com/en-in/make-time-for-good/">
            Warranty & Repairs
          </a>
        </li>
        <li>
          <a href="https://www.fossil.com/en-in/fossil-foundation/">
            Watch Care & Instructions
          </a>
        </li>
        <li>
          <a href="https://www.fossilgroup.com/brands/">Product Registration</a>
        </li>
        <li>
          <a href="http://www.fossilgroup.com/careers/">FAQ</a>
        </li>
        <li class="d-none d-md-inline">
          <a href="https://www.fossil.com/en-in/store-locator.html">
            ADA Statement - Fossil
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ThirdFooterItem;
