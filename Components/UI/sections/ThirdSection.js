import classes from "./ThirdSection.module.css";
const ThirdSection = () => {
  return (
    <section style={{ overflow: "hidden" }}>
      <div style={{ overflow: "unset" }} className="section">
        <img
          className={classes["d-none-mobile"]}
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwe8773300/2021/HO21/set_1101_in/hero2-desktop-BG-1.jpg"
          alt="kirti-img"
        />

        <img
          className={classes["d-none-desktop"]}
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw3fd53059/2021/HO21/set_1101_in/hero2-mobile-BG-1.jpg"
          alt="kirti-img"
        />

        <img
          loading="lazy"
          className={classes.cracker}
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwc4639c1a/2021/HO21/set_1101_in/hero2-graphic.png"
          alt="img-containing-text"
        />

        <div
          id={classes["secondvarun-text-position"]}
          className="varun-text-img"
        >
          <h3>
            NEW IN <span className={classes["olive-text"]}>Olive</span>
          </h3>
          <p>
            Our FB 01 Chrono watch just got
            <br />a <span className={classes["fancy-accent"]}>pop</span> of
            color!{" "}
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP LATEST COLLECTION
          </a>
        </div>
        <div
          id={classes["mobile-varun-text-img-position"]}
          className="mobile-varun-text-img"
        >
          <h3>
            NEW IN <span id={classes.olive} className={classes["olive-text"]}>Olive</span>
          </h3>
          <p>
            Our FB 01 Chrono watch just got
            <br />a <span className={classes["fancy-accent"]}>pop</span> of
            color!
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/shop/shop-the-collection/"
          >
            SHOP LATEST COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
