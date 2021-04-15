import '../App.css'

const Description = (props) => {
    return (
        <div className="description">
            <p>{props.description} {props.id}</p>
        </div>
    )
}
export default Description