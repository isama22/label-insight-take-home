import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
            <h1>{this.props.title}</h1>
            <img src={this.props.thumbnailUrl} alt="" />
            <button onClick={this.props.onHide}>Close Modal</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;