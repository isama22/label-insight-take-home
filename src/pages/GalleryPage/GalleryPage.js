import React from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = (props) => {
  
  const photo = props.getPhoto(props.match.params.idx);
  
  console.log(photo)
  return (
    <div className='starship-page'>
      {photo ?
        <section className='starship'>
        <div className='line'>Name: {photo.title}</div>
        <div className='line'>Model: {photo.thumbnailUrl}</div>
        <Link to='/'>←</Link>
      </section>
        :
        <h3>Loading...</h3>
      }
    </div>
  );
};

export default GalleryPage;