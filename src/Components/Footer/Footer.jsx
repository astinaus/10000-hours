import React from 'react';
import logo from '../../Assets/Images/logo.png';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  position: relative;
  transform: translateY(-30%);
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;

  img {
    max-width: 100%;
    vertical-align: top;
    object-fit: cover;
  }

  p {
    font-size: 0.75rem;
    font-family: 'Noto Sans KR';
    text-align: center;
    line-height: 1.0625rem;
  }

  @media (389px < width < 610px) {
    img {
      width: 91px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter className="footer">
      <a href="https://paullab.co.kr/" target="_blank" rel="noreferrer">
        <img src={logo} alt="위니브 로고" />
      </a>
      <p>
        ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.{' '}
        <br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
      </p>
    </StyledFooter>
  );
}
