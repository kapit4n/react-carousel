import React from "react";
import "./App.css";
import Carrousel from "./carrousel";

function App() {
  const [images] = React.useState([
    {
      id: 0,
      src:
        "https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg"
    },

    {
      id: 1,
      src:
        "https://i.pinimg.com/originals/47/e3/19/47e319078a9b381737b30bb015d9883e.jpg"
    },
    {
      id: 2,

      src:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Bugatti/Bugatti-Chiron/6524/1550828170128/front-left-side-47.jpg"
    },
    {
      id: 3,
      src:
        "https://www.telegraph.co.uk/content/dam/news/2017/11/11/Lam1-xlarge_trans_NvBQzQNjv4BqnAdySV0BR-4fDN_-_p756cVfcy8zLGPV4EhRkjQy7tg.jpg"
    }
  ]);
  return (
    <div className="App">
      <Carrousel images={images} />
    </div>
  );
}

export default App;
