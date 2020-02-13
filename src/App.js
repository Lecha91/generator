import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SingleComponent from "./components/SingleComponent";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setPhotos(res.data.slice(0, 300));
    });
  }, []);

  return (
    <div className="App">
      {photos.legth === 0 ? (
        <h1>Nema nicega</h1>
      ) : (
        photos.map(photo => (
          <SingleComponent id={photo.id} title={photo.title} />
        ))
      )}
    </div>
  );
}

export default App;
