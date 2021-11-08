import classes from "./FourthFooterItem.module.css";

const FourthFooterItem = () => {
  return (
    <div style={{ flex: 0 }}>
      <h3 className={classes.h3}>Contact Us</h3>
      <ul className={classes.ul}>
        <li>
          <a href="https://www.fossilgroup.com/">customercare.in@fossil.com</a>
        </li>
        <li>
          <img
            alt=""
            src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw4d2e08f6/images/phone.svg"
          />{" "}
          0008009190951 <br />
          For Order related queries : <br />
          (Order Status, Return, Refund &amp; General queries) <br />
          <br />
          Tel: 0008009190951 <br />
          Email:{" "}
          <a href="mailto:Customercare.in@fossil.com">
            {" "}
            Customercare.in@fossil.com
          </a>{" "}
          <br />
          Hours: Monday - Sunday : 10:00am - 7:00pm <br />
          (Excluding Public Holidays) <br />
        </li>
        <li className={classes["last-footer-column"]}>
          For After Sales Service Queries :<br />
          (Product Service, Warranty Claim)
          <br />
          <br />
          Tel: 0008009190951 <br />
          Email:{" "}
          <a href="mailto:service.in@fossil.com">service.in@fossil.com</a>
          <br />
          Hours: Monday - Sunday :<br />
          10:00am - 7:00pm
          <br />
          (Excluding Public Holidays)
          <br />
        </li>
        <li className={classes.feedback}>
          <a href="#0">FEEDBACK</a>
        </li>
      </ul>
    </div>
  );
};

export default FourthFooterItem;
