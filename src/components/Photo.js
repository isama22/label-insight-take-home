import React from 'react'

const Photo = (props) => {
    return (
        <div className='ship'>
            <p>title: {props.photoData.title}</p>
            <img src={props.photoData.thumbnailUrl} alt=""/>
        </div>
    )
}

export default Photo