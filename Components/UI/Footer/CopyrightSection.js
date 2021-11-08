import classes from "./CopyrightSection.module.css";

const CopyrightSection = () => {
  return (
    <div className={classes.copysection}>
      <div style={{ marginRight: "-10px", marginLeft: "-10px" }}>
        <ul className={classes.ul}>
          <li>©2021 FOSSIL GROUP, INC.</li>
          <li>
            <a href="#0">Privacy Policy</a>
          </li>
          <li>
            <a href="#0">APP Privacy Policy</a>
          </li>
          <li>
            <a href="#0">Terms of Use</a>
          </li>
          <li>
            <a href="#0">CA Use</a>
          </li>
          <li>
            <a href="#0">Stores</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CopyrightSection;
