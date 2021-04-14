
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const App = () => {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    getPhotos();
  }, [])

  async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=25')
    const photos = await response.json();
    setPhotos(photos)
  }

  return (
    <div className="App">
      <div className="items">
        <div className="grid">
          {photos.map(photo => (
            // <Link to="/detail">
              <div className="grid-item">
                <p>{photo.title}</p>
                <img src={photo.thumbnailUrl} className="img" />
              </div>
            // </Link>

          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
