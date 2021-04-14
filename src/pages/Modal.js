import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <>
        {this.props.show && (
          <div className="modal">
              <div className="modal-scroll">

            <h1>{this.props.title}</h1>
            <img src={this.props.url} alt="" className="url-img"/>
            <button onClick={this.props.onHide} className="close-btn">Close Modal</button>
              </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;