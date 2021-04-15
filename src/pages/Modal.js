import React, { Component } from "react";
import "./Modal.css";
import Comments from './Comments'

class Modal extends Component {

    render() {
        console.log(this.props.show);
        return (
            <>
                {this.props.show && (
                    <div className="modal" onClick={this.props.onHide}>
                        <div className="modal-scroll">
                            <p>{this.props.title}</p>
                            {/* <p>{this.props.id}</p> */}
                            <img src={this.props.url} alt="" className="url-img" />
                            <Comments 
                            id={this.props.id}
                            // photo={this.props.photo}
                            />
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Modal;