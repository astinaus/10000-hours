import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';

const StyledOutputDisplay = styled.section`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  font-family: 'GmarketSansMedium';
  padding-bottom: 100px;
  div {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 25px;
    font-weight: 400;

    strong {
      font-size: 4.5rem;
      font-weight: 700;
    }
  }
  @media (389px < width < 610px) {
    div {
      gap: 10px;
      strong {
        font-size: 3.5rem;
      }
    }
  }
`;

const ButtonCont = styled.div`
  padding-top: 130px;
  display: flex;
  gap: 18px;
  @media (389px < width < 610px) {
    padding-top: 70px;
    button {
      padding: 15px 35px;
    }
  }
`;

export default function OutputDisplay(props) {
  const hour = props.inputResult.hour
    ? Math.floor(10000 / props.inputResult.hour)
    : 0;
  return (
    <>
      <StyledOutputDisplay>
        <div>
          당신은 <strong>{props.inputResult.field}</strong> 전문가가 되기 위해서
        </div>
        <div>
          대략 <strong>{hour}</strong> 일 이상 훈련하셔야 합니다! :)
        </div>
        <ButtonCont>
          <Button bgColor="#FCEE21" event={props.setModal}>
            훈련하러 가기 GO!GO!
          </Button>
          <Button bgColor="#fff" event={props.copyURL}>
            공유하기
          </Button>
        </ButtonCont>
      </StyledOutputDisplay>
    </>
  );
}
