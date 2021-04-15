import React, { Component } from 'react';
import Description from './Description'
import '../App.css'

class DescriptionBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptions: [],
            newDescription: [],
            id: this.props.id
        }
    }

    formRef = React.createRef();

    addDescription = e => {
        if (!this.formRef.current.checkValidity()) return;
        e.preventDefault();
        this.setState(state => ({
            descriptions: [...state.descriptions, this.state.newDescription],
            formInvalid: true
        }))
    }

    handleChange = e => {
        console.log(e.target.checkValidity())
        const newDescription = {
            ...this.state.newDescription,
            [e.target.name]: e.target.value
        }
        this.setState({
            newDescription,
            formInvalid: !this.formRef.current.checkValidity()
        })
    }
    render() {
        return (
            <>
                <div className="description-box">
                    {/* <Description id={this.state.id} description={this.state.description} /> */}
                    {this.state.descriptions.map(d => (
                        <p>{d.description}</p>
                    ))}
                    <div className="input-div">
                        <form ref={this.formRef} onSubmit={this.addDescription}>
                            <p>add a description: </p>

                            <input 
                            type="text" 
                            placeholder={this.state.id} 
                            name="description"
                            value={this.state.newDescription.description}
                            onChange={this.handleChange}
                            />
                            <button onClick={this.addDescription}>  →  </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default DescriptionBox