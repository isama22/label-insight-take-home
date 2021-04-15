import React, { Component } from 'react';
import Description from './Description'
import '../App.css'

class DescriptionBox extends Component {
    state = {
        description: '',
        id: this.props.id
    }
    handleAddDescription = async (e) => {
    }

    handleChange = e => {
    }

    async componentDidMount() {
    }
    render() {
        return (
            <>
                <div className="description-box">
                    <Description id={this.state.id} />
                    <div className="input-div">
                        <p>add a description: </p>
                        <input type="text" placeholder={this.state.id} />
                        <button>  →  </button>
                    </div>
                </div>
            </>
        )
    }
}
export default DescriptionBox