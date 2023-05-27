import React from 'react';
import title from '../../Assets/Images/title.png';
import clock from '../../Assets/Images/clock.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 265px;
  background: no-repeat url(${clock}) center / contain;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    vertical-align: middle;
    object-fit: cover;
    width: 564px;
  }

  @media (max-width: 768px) {
    height: 200px;

    img {
      width: 430px;
    }
  }
`;

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1>
          <img src={title} alt="1만 시간의 법칙 타이틀" />
        </h1>
      </StyledHeader>
    </>
  );
}
