import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
      }}
      onClick={props.event}
      type="button"
    >
      {props.children}
    </button>
  );
}
