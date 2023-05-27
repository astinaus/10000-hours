import React from 'react';
import licat from '../../Assets/Images/licat.png';
import Button from '../Button/Button';
import styled from 'styled-components';

const ModalWrapper = styled.article`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 800px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  padding: 50px 50px;
  box-sizing: border-box;
  font-family: 'OTEnjoystoriesBA';
  color: #5b2386;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  strong {
    font-size: 5rem;
  }

  span {
    font-size: 1.875rem;
  }

  img {
    max-width: 100%;
    width: 530px;
    flex: 1;
  }
  button {
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 500px;
    padding: 30px 30px;

    img {
      width: 320px;
    }
    button {
      margin-top: 30px;
      border-radius: 13px;
    }
  }

  @media (389px < width < 610px) {
    width: 350px;
    height: 450px;

    img {
      flex: 0;
    }

    button {
      width: 241px;
      padding: 15px 35px;
    }
  }
`;

export default function Modal(props) {
  return (
    <ModalWrapper onClick={props.setModal}>
      <StyledModal>
        <strong>화이팅!! ♥♥</strong>
        <span>당신의 꿈을 응원합니다!</span>
        <img src={licat} alt="licat" />
        <Button bgColor="#FCEE21" event={props.setModal}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </Button>
      </StyledModal>
    </ModalWrapper>
  );
}
