import React from 'react';
import './OutputDisplay.css';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

export default function OutputDisplay(props) {
  const hour = props.hour ? Math.floor(10000 / props.hour) : 0;
  return (
    <>
      <Loading loading={props.loading} />
      <section
        className="output-display"
        style={props.display ? { display: 'flex' } : { display: 'none' }}
      >
        <div>
          당신은 <strong>{props.field}</strong> 전문가가 되기 위해서
        </div>
        <div>
          대략 <strong>{hour}</strong> 일 이상 훈련하셔야 합니다! :)
        </div>
        <div className="btn-cont">
          <Button
            bgColor="#FCEE21"
            borderRadius="56px"
            txt="훈련하러 가기 GO!GO!"
            event={props.setModal}
          />
          <Button
            bgColor="#fff"
            borderRadius="56px"
            txt="공유하기"
            event={props.copyURL}
          />
        </div>
      </section>
    </>
  );
}
