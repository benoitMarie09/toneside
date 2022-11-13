import "./Slide.scss";
import Caption from "../Caption/Caption";

function Slide({ currentSlide, updateSlide, index, slideNb, image, caption }) {
  const z = slideNb - index;
  function wheelSlide(event) {
    console.log(currentSlide);
    if (event.deltaY > 0) {
      if (currentSlide < slideNb - 1) {
        updateSlide(index + 1);
      }
    } else {
      if (currentSlide >= 1) updateSlide(index - 1);
    }
  }

  return (
    <div
      className={`slide ${currentSlide > index ? "slide--up" : ""}`}
      style={{ backgroundImage: `url(${image})`, zIndex: z }}
      onWheel={(e) => wheelSlide(e)}
    >
      <Caption caption={caption} currentSlide={currentSlide} index={index} />
    </div>
  );
}

export default Slide;
