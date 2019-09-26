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
    <div>
      <div style={{ display: "Flex" }}>
        <button onClick={onPrevious}>{"<"}</button>
        <img src={images[currentIndex].src} width={500} height={400}></img>
        <button onClick={onNext}>{">"}</button>
      </div>
      <div>
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
