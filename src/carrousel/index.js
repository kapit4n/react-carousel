import React from "react";
import "./styles.css";

export default function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "Flex" }}>
        <button className="btn-action" onClick={onPrevious}>
          {"<"}
        </button>
        <img
          className="current"
          src={images[currentIndex].src}
          alt="current"
        ></img>
        <button className="btn-action" onClick={onNext}>
          {">"}
        </button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        {images.map((x, i) => (
          <>
            {x.id === currentIndex ? (
              <img
                className="img-mini-current"
                src={x.src}
                onClick={() => setCurrentIndex(i)}
                alt="Current"
              />
            ) : (
              <img
                className="img-mini"
                src={x.src}
                onClick={() => setCurrentIndex(i)}
                alt="mini"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
