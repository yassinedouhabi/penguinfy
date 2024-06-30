import PropTypes from "prop-types";
import { register } from "swiper/element/bundle";
register();

const CustomSwiper = ({ items, renderSlide, spaceBetween }) => {
  return (
    <swiper-container slides-per-view="1" space-between={spaceBetween}>
      {items.map((item, index) => (
        <swiper-slide key={index}>{renderSlide(item)}</swiper-slide>
      ))}
    </swiper-container>
  );
};

CustomSwiper.propTypes = {
  items: PropTypes.any,
  renderSlide: PropTypes.func.isRequired,
  spaceBetween: PropTypes.number,
};

export default CustomSwiper;
