import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Photo extends React.Component {
  state = {
    photo: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response =>
        this.setState({
          photo: response.data
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { title, url, thumbnailUrl } = this.state.photo;

    return (
      <>
        {title && (
          <div>
            <h1>{title}</h1>
            <h2>title: {title}</h2>
            <h3>
              url: <a href={url}>{url}</a>
            </h3>
            <img src={thumbnailUrl} alt=""/>
            <Link to="/">
              <button>Back To List</button>
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default Photo;
