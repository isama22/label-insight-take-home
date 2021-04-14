import React from 'react'

const Photo = (props) => {
    return (
        <div className='ship'>
            {props.photoData.title}
            {props.photoData.thumbnailUrl}
        </div>
    )
}

export default Photo