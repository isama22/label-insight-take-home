import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class PhotoList extends React.Component {
  state = {
    photos: []
  };

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(response =>
        this.setState({
          photos: response.data
        })
      )
      .catch(error => console.log(error));
  };

  render() {
    const photos = this.state.photos;

    return (
      <>
        {photos.length !== 0 && (
          <div>
            <ul>
              {photos.map(photo => (
                <Link
                  key={photo.id}
                  to={{
                    pathname: `/photos/${photo.id}`
                  }}
                >
                  <div>
                    <p>{photo.title}</p>
                    <img src={photo.thumbnailUrl} alt=""/>
                  </div>
                </Link>
              ))}
            </ul>
            <Link to="/">
              <button>Home</button>
            </Link>
          </div>
        )}
      </>
    );
  }
}
export default PhotoList;
