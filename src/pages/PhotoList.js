import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'
import Modal from "./Modal";

class PhotoList extends React.Component {
    state = {
        photos: [],
        showModal: 0
    };

    getModal = value => {
        this.setState({ showModal: value });
    };

    hideModal = value => {
        this.setState({ showModal: 0 });
    };

    componentDidMount = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/photos/?_limit=25")
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
                    <div className="grid">

                        {photos.map(photo => (
                            // <Link
                            //   key={photo.id}
                            //   to={{
                            //     pathname: `/photos/${photo.id}`
                            //   }}
                            // >


                            // <a href={photo.thumbnailUrl}>
                            <div>
                                <p>{photo.title}</p>
                                <img src={photo.thumbnailUrl} alt="" />
                                <button onClick={() => this.getModal(photo.id)}>Popup</button>
                                <Modal
                                    show={this.state.showModal === photo.id}
                                    onHide={() => this.hideModal(photo.id)}
                                    title={photo.title}
                                    thumbnailUrl={photo.thumbnailUrl}
                                />
                            </div>
                            // </a>

                            // </Link>
                        ))}

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
