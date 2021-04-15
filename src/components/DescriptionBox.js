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
        console.log("id", this.props.id, this.state.description);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    handleFormSubmit(e) {
        localStorage.setItem('document' + this.state.id, JSON.stringify(this.state));
        e.preventDefault()
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
                    {this.state.description !== ' ' ? <Description description={this.state.description} /> : ' '}
                    
                    <div className="input-div">
                        <form onSubmit={this.handleFormSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="description"
                                    onChange={this.handleChange}
                                    placeholder={"add a description"} />
                                <button type="submit">  →  </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default DescriptionBox
