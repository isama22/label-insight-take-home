import React, { Component } from 'react';
import '../App.css'

class DescriptionBox extends Component {

    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            description: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // on form submit...
    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document', JSON.stringify(this.state));
    }

    // React Life Cycle
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));

        if (localStorage.getItem('document')) {
            this.setState({
                description: this.documentData.description
            })
        } else {
            this.setState({
                description: ''
            })
        }
    }
    render() {
        return (
            <>
                <div className="description-box">
                    <p>this is photo #{this.props.id}</p>
                    <p>{this.state.description}</p>
                    <div className="input-div">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <input 
                                type="text" 
                                name="description" 
                                value={this.state.description} 
                                onChange={this.handleChange} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default DescriptionBox
