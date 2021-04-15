import React, { Component } from 'react';
import Comment from './Comment'
import CommentForm from './CommentForm'
import '../App.css'

// const Comments = (props) => {

//     return (
//         <div className="comments">
//             <p>hello i am the comments component</p>
//             {/* <p>{props.id}</p> */}
//             <Comment {...props}/>
//             <CommentForm />
//         </div>
//     )
// }

class Comments extends Component {
    state = {
        comment: '',
        id: this.props.id
    }
    handleAddComment = async (e) => {
        // e.preventDefault()
        // await linksAPI.addComment(e.target.id, this.state.linkComment)
        // const link = await linksAPI.getOne(this.state.link)
        // this.setState({link: link, linkComment: ''})
    }

    handleChange = e => {
        // this.setState({[e.target.name]: e.target.value})
    }

    async componentDidMount(){
        // const link = await linksAPI.getOne(this.state.link)
        // this.setState({link: link, linkComment: ''})
    }
    render(){
        return (
            <>
            <div>
                {/* <p>{this.props.id}</p> */}
                <Comment id={this.state.id}/>
                {/* <CommentForm id={this.state.id}/> */}
                <input type="text" placeholder={this.state.id}/>
                </div>
            </>
        )
    }
}
export default Comments