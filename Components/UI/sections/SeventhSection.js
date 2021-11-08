import Example from "../Accordion/Accordio";
import classes from "./SeventhSection.module.css";

const SeventhSection = () => {
  return (
    <section>
      <div style={{ marginTop: "4.5rem" }} className="section">
        <div className={classes["fossil-watches-container"]}>
          <div className={classes["for-line"]}></div>
          <h2>
            FOSSIL WATCHES, LEATHER HANDBAGS &amp; ACCESSORIES ARE PERFECT FOR
            ANY OCCASION
          </h2>
          <p>
            Fossil is an American watch and lifestyle company, creatively rooted
            in authentic vintage and classic design. We strive to create
            high-quality watches, bags, jewelry and more that preserve the best
            of the past while updating it for today. When the clean lines of the
            mid-century meet the modern looks of today, the result is key items
            that represent the best of what we stand for: bags that pair
            portability with streamlined design, traditional watches created in
            fresh hues and materials, and timeless clothes and accessories that
            accompany you wherever you are traveling.
          </p>
          <Example />
        </div>
      </div>
    </section>
  );
};
export default SeventhSection;
