import React from "react";
import axios from "axios";
import '../App.css'
import Modal from "../components/Modal";

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
                                <div 
                                className="modal-link" 
                                key={photo.id}
                                >
                                    <p className="title">{photo.title}</p>
                                    <img 
                                    src={photo.thumbnailUrl} 
                                    alt="" 
                                    className="img" 
                                    onClick={() => this.getModal(photo.id)}
                                    />
                                    <Modal
                                        show={this.state.showModal === photo.id}
                                        onHide={() => this.hideModal(photo.id)}
                                        title={photo.title}
                                        url={photo.url}
                                        id={photo.id}
                                    />
                                </div>
                        ))}
                    </div>
                )}
            </>
        );
    }
}
export default PhotoList;
