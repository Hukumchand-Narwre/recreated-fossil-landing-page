import classes from "./FifthSection.module.css";

const FifthSection = () => {
  return (
    <section>
      <div className="section">
        <img
          className="d-none-mobile"
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw2f89bed2/2021/HO21/set_1101_in/hero3-Desktop-BG.jpg"
          alt="kirti-img"
        />

        <img
          className="d-none-desktop"
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw66249ed0/2021/HO21/set_1101_in/hero3-Mobile-BG.jpg"
          alt="kirti-img"
        />

        <div
          id={classes["bag-text-position"]}
          className="varun-text-img d-none-mobile "
        >
          <h3>
            THE NEW <span className={classes["classic-text"]}>Classic</span>
          </h3>
          <p>
            Totes, backpacks and more from our latest
            <br />
            vintage classics collection.
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP BAGS
          </a>
        </div>
        <div
          id={classes["changing-bag"]}
          className="varun-text-img d-none-mobile"
        >
          <img
            loading="lazy"
            src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw2b9c09f8/2021/HO21/set_1101_in/hero3-Mobile+Desktop.gif"
            alt="kirti-img"
          />
          <div className={classes["star-img"]}>
            <img
              loading="lazy"
              src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw0d9d95ed/2021/HO21/set_1101_in/hero3-Desktop-Graphic.png"
              alt="kirti-img"
            />
          </div>
        </div>
        <div id={classes["moving-bag-image"]} className="mobile-varun-text-img">
          <img
            loading="lazy"
            src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw2b9c09f8/2021/HO21/set_1101_in/hero3-Mobile+Desktop.gif"
            alt=""
            title=""
          />
        </div>
        <div
          className={`${classes["changing-bag-below-text"]} d-none-desktop `}
        >
          <h3>
            THE NEW
            <span
              id={classes["classic-text-changes-mobile"]}
              className={classes["classic-text"]}
            >
              Classic
            </span>
          </h3>
          <p>
            Totes, backpacks and more from our latest
            <br />
            vintage classics collection.
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP BAGS
          </a>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
