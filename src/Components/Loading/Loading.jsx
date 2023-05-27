import React from 'react';
import loading from '../../Assets/Images/loading.png';
import styled from 'styled-components';

const StyledLoading = styled.article`
  display: flex;
  width: 100px;
  height: 100px;
  margin: 0 auto 130px;

  img {
    width: 100%;
    animation: rotate 1.1s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <>
      <StyledLoading>
        <img src={loading} alt="Loading" />
      </StyledLoading>
    </>
  );
}
