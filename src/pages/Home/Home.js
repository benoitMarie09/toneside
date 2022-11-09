import "./Home.scss";
import Slide from "../../components/Slide/index";
import { slides } from "../../datas/slidesData";

function Home({ currentSlide, updateSlide }) {
  const slidesNb = slides.getSlidesData().length;
  return (
    <div>
      {slides.getSlidesData().map((slidesItem, index) => (
        <Slide
          key={slidesItem.key}
          currentSlide={currentSlide}
          updateSlide={updateSlide}
          index={index}
          slideNb={slidesNb}
          image={slidesItem.image}
          caption={slidesItem.caption}
        />
      ))}
    </div>
  );
}

export default Home;
