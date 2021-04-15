import React, { Component } from 'react';
import Comment from './Comment'
import '../App.css'

class Comments extends Component {
    state = {
        comment: '',
        id: this.props.id
    }
    handleAddComment = async (e) => {
    }

    handleChange = e => {
    }

    async componentDidMount(){
    }
    render(){
        return (
            <>
            <div>
                <Comment id={this.state.id}/>
                <input type="text" placeholder={this.state.id}/>
                </div>
            </>
        )
    }
}
export default Comments