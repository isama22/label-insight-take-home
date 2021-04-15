import React, { Component } from 'react';
// import Description from './Description'
import '../App.css'

class DescriptionBox extends Component {
    
    userData;

    constructor(props) {
        super(props);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            description: ''
        }
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value })
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                description: this.userData.description
            })
        } else {
            this.setState({
                description: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState))
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }
    render() {
        return (
            <>
                <div className="description-box">
                    <p>{this.state.description}</p>
                    <div className="input-div">
                        <form onSubmit={this.onSubmit}>
                            <div>
                                <label>description</label>
                                <input type="text" onChange={this.onChangeDescription} />
                                <button type="submit"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default DescriptionBox