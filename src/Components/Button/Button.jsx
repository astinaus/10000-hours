import React from 'react';
import './Button.css';

export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        borderRadius: props.borderRadius,
      }}
      onClick={props.event}
      type="button"
    >
      {props.txt}
    </button>
  );
}
