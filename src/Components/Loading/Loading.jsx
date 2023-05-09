import React from 'react';
import loading from '../../Assets/Images/loading.png';
import './Loading.css';

export default function Loading() {
  return (
    <>
      <article className="loading">
        <img src={loading} alt="Loading" />
      </article>
    </>
  );
}
