import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 21px 49px;
  box-sizing: border-box;
  font-size: 1.5rem;
  color: #5b2386;
  font-family: 'GmarketSansMedium';
  font-weight: 700;
  cursor: pointer;
  border-radius: 56px;
`;

export default function Button(props) {
  return (
    <StyledButton
      style={{
        backgroundColor: props.bgColor,
      }}
      onClick={props.event || null}
      type={props.type || 'button'}
    >
      {props.children}
    </StyledButton>
  );
}
