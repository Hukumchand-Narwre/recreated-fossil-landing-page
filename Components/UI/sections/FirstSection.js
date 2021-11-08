import classes from "./FirstSection.module.css";

const FirstSection = () => {
  return (
    <section>
      <div className={classes["varun-img"]}>
        <img
          loading="lazy"
          src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw838ac0a2/2021/HO21/set_1101_in/hero5-Desktop-BG.jpg"
          alt="varun-img"
        />
        <div className="varun-text-img">
          <img
            loading="lazy"
            src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dwe6f0de1d/2021/HO21/set_1101_in/hero5-Desktop-copy-01.png"
            alt="img-containing-text"
          />
          <p>
            "2X charging speed. Industry-leading <br /> performance.
            <br />
            Fossil's fastest, most advanced smartwatch ever. Gen 6 is here."
          </p>
          <a
            className="btn  btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP NOW
          </a>
          <div>
            <a
              className="btn btn-first-section"
              href="https://www.fossil.com/en-in/smartwatches/learn-more/gen-6/"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="mobile-varun-text-img">
          <picture>
            <img
              loading="lazy"
              src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw4f77a79c/2021/HO21/set_1101_in/hero5-Mobile-copy-01.png"
              alt="Way More. Way Faster "
              title="Way More. Way Faster "
            />
          </picture>
          <p>
            "2X charging speed. Industry-leading performance.
            <br />
            Fossil's fastest, most advanced smartwatch ever. Gen 6 is here."
          </p>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/generations/gen-6/"
          >
            SHOP NOW
          </a>
          <a
            className="btn btn-first-section"
            href="https://www.fossil.com/en-in/smartwatches/learn-more/gen-6/"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
};
export default FirstSection;
