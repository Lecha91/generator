import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SingleComponent from "./components/SingleComponent";

function App() {
  const [album, setAlbum] = useState([]);
  const [visibleItems, setVisibleItems] = useState(50);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const handleData = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setAlbum(res.data.slice(0, 300));
    });
  };

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const bodyHeight = document.body.offsetHeight - 200;

    const currentScrollPosition = window.pageYOffset;
    setScrollPosition(currentScrollPosition);

    if (
      window.innerHeight + scrollPosition > bodyHeight &&
      visibleItems < 300
    ) {
      setVisibleItems(visibleItems + 50);
      console.log(visibleItems);
    }
  };

  return (
    <div className="App">
      {album.length === 0 ? (
        <h1>Nema nicega</h1>
      ) : (
        album
          .slice(0, visibleItems)
          .map(photo => (
            <SingleComponent id={photo.id} title={photo.title} key={photo.id} />
          ))
      )}
    </div>
  );
}

export default App;
