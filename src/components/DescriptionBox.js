import React, { Component } from 'react';
import '../App.css'
import Description from './Description'

class DescriptionBox extends Component {

    documentData;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            description: '',
            id: this.props.id
        }
        console.log("id", this.props.id);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document' + this.state.id, JSON.stringify(this.state));
        // this.setState({ description: ""});
    }

    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document' + this.state.id));

        if (localStorage.getItem('document' + this.state.id)) {
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
                    <Description description={this.state.description} />
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
