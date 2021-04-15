import React, { Component } from "react";
import "../App.css";
import DescriptionBox from './DescriptionBox'

class Modal extends Component {

    render() {
        // console.log(this.props.show);
        return (
            <>
                {this.props.show && (
                    <div className="modal">
                        <div className="modal-scroll">
                            <h3 className="title">{this.props.title}</h3>
                            <img src={this.props.url} alt="" className="url-img" onClick={this.props.onHide}/>
                            <DescriptionBox
                            id={this.props.id}
                            />
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default Modal;