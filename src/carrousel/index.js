import React from "react";

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
        <button
          style={{ width: "5rem", boxShadow: "inset 10px 10px 50px #fff" }}
          onClick={onPrevious}
        >
          {"<"}
        </button>
        <img
          style={{
            borderRadius: "5%",
            border: "1px solid #ddd",
            padding: "5px"
          }}
          src={images[currentIndex].src}
          width={700}
          height={400}
        ></img>
        <button
          style={{ width: "5rem", boxShadow: "inset 10px 10px 50px #fff" }}
          onClick={onNext}
        >
          {">"}
        </button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        {images.map(x => (
          <img
            src={x.src}
            width={50}
            height={50}
            onClick={() => setCurrentIndex(x.id)}
          />
        ))}
      </div>
    </div>
  );
}
