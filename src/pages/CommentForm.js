import '../App.css'

const CommentForm = (props) => {
    return (
        <div className="comment-form">
           <input type="text" placeholder={props.id}/>
        </div>
    )
}
export default CommentForm