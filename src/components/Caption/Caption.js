import { Link } from "react-router-dom";
import "./Caption.scss";

const Caption = ({ caption, currentSlide, index }) => {
  console.log(caption);

  return (
    <div
      className={`caption ${currentSlide === index ? "caption--animated" : ""}`}
    >
      {caption.title && (
        <img className="caption__title" src={caption.title} alt="title" />
      )}
      {caption.link && (
        <Link to={caption.link}>
          <h1>{caption.text}</h1>
        </Link>
      )}
      {caption.data && (
        <ul>
          <h1>{caption.text}</h1>
          {caption.data.map((data) => (
            <li>{data}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Caption;
