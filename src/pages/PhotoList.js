import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css'
import Modal from "./Modal";

class PhotoList extends React.Component {
    state = {
        photos: [],
        showModal: 0,
        comments: []
    };
//i want to keep state in the parent component and pass props down to the children so they all stay in sync. i want to put comments in componentWillMount and have the comment component just display the data 

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
                                <div className="modal-link">
                                    <p className="title">{photo.title}</p>
                                    <img src={photo.thumbnailUrl} alt="" className="img" onClick={() => this.getModal(photo.id)}/>
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
