import React from 'react';

export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor,
        width: props.width,
        borderRadius: props.borderRadius,
      }}
      onClickEvent={props.event}
    >
      {props.txt}
    </button>
  );
}
