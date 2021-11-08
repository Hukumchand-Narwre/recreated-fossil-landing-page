import Slider from "react-slick";
import DrawerComponent from "../Drawer/DrawerComponent";
import classes from "./SimpleSlider.module.css";
function SimpleSlider(props) {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.slider}>
      {props.scrollPosition >= 201 && <DrawerComponent anchor="left" />}
      <div className={classes["slider-style"]}>
        <Slider {...settings}>
          <div>
            <p>
              <u>1% Proceeds Fossil Foundation | LEARN MORE</u>
            </p>
          </div>
          <div>
            <p>
              <u>Receive 10% off* your first purchase when you sign up!</u>
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
