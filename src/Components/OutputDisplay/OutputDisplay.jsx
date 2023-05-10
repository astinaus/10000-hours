import React from 'react';
import './OutputDisplay.css';
import Button from '../Button/Button';

export default function OutputDisplay(props) {
  const hour = props.inputResult.hour
    ? Math.floor(10000 / props.inputResult.hour)
    : 0;
  return (
    <>
      <section className="output-display">
        <div>
          당신은 <strong>{props.inputResult.field}</strong> 전문가가 되기 위해서
        </div>
        <div>
          대략 <strong>{hour}</strong> 일 이상 훈련하셔야 합니다! :)
        </div>
        <div className="btn-cont">
          <Button bgColor="#FCEE21" event={props.setModal}>
            훈련하러 가기 GO!GO!
          </Button>
          <Button bgColor="#fff" event={props.copyURL}>
            공유하기
          </Button>
        </div>
      </section>
    </>
  );
}
