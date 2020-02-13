import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import SingleComponent from "./components/SingleComponent";

function App() {
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setPhotos(res.data.slice(0, 300));
    });
  }, []);

  return (
    <div className="App">
      <div className="sing">
        {photos.map(photo => (
          <h1>{photo.title}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
