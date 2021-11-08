import classes from "./SixthSection.module.css";

const SixthSection = () => {
  return (
    <section>
      <div className="section">
        <img
          className="d-none-mobile"
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwb0f864df/2021/HO21/set_1101_in/hero4-Desktop-BG.jpg"
          alt="kirti-img"
        />
        <img
          className="d-none-desktop"
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw1acdf152/2021/HO21/set_1101_in/hero4-Mobile-BG.jpg"
          alt="kirti-img"
        />

        <div id={classes["ring-text-position"]} className="varun-text-img">
          <h3>
            <span className={classes["fancy-accent"]}>It’s a</span>
            <br />
            MOOD
          </h3>

          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP NOW
          </a>
        </div>

        <div
          className={`${classes["mood-container-mobile"]} mobile-varun-text-img`}
        >
          <h3>
            <span
              id={classes["fancy-accent-mobile"]}
              className={classes["fancy-accent"]}
            >
              It’s a
            </span>
            <br />
            MOOD
          </h3>

          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
