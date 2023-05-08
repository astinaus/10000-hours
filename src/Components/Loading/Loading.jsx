import React from 'react';
import loading from '../../Assets/Images/loading.png';
import './Loading.css';

export default function Loading(props) {
  return (
    <>
      <article
        className="loading"
        style={props.loading ? { display: 'flex' } : { display: 'none' }}
      >
        <img src={loading} alt="Loading" />
      </article>
    </>
  );
}
