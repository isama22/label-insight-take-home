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

    async componentDidMount(){
    }
    render(){
        return (
            <>
            <div>
                <Description id={this.state.id}/>
                <input type="text" placeholder={this.state.id}/>
                </div>
            </>
        )
    }
}
export default DescriptionBox