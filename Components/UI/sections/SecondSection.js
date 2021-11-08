import classes from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <section>
      <div className={`${classes["kirti-img"]} section`}>
        <img
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwd50f3134/2021/HO21/set_1101_in/hero1-desktop-BG.jpg"
          alt="kirti-img"
        />
        <div id={classes["kirtitext-img-position"]} className="varun-text-img">
          <img
            loading="lazy"
            src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwc2ffc806/2021/HO21/set_1101_in/hero1-desktop-copy.png"
            alt="img-containing-text"
          />
          <p id={classes["kirti-para"]}>
            Discover our bestselling Jacqueline,
            <br />
            now with solar-powered movement
            <br />
            and an eco-leather strap. Pairs perfectly
            <br />
            with our Kier Vegan Cactus Tote.
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP KRITI'S LOOK
          </a>
        </div>
        <div id={classes["mobile-2nd-img"]} className="mobile-varun-text-img">
          <picture>
            <img
              loading="lazy"
              src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw85b96f61/2021/HO21/set_1101_in/hero1-mobile-copy.png"
              alt="GO PRO-PLANET THIS SEASON"
              title="GO PRO-PLANET THIS SEASON"
            />
          </picture>
          <p style={{ color: "#924020", marginBottom: 0 }}>
            Discover our bestselling Jacqueline,
            <br />
            now with solar-powered movement
            <br />
            and an eco-leather strap. Pairs perfectly
            <br />
            with our Kier Vegan Cactus Tote.
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/shop/modern-and-magic/"
          >
            SHOP KRITI's LOOK
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
