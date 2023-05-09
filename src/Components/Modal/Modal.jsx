import React from 'react';
import './Modal.css';
import licat from '../../Assets/Images/licat.png';
import Button from '../Button/Button';

export default function Modal(props) {
  return (
    <section className="modal-wrapper" onClick={props.setModal}>
      <div className="modal">
        <strong>화이팅!! ♥♥</strong>
        <span>당신의 꿈을 응원합니다!</span>
        <img src={licat} alt="licat" />
        <Button bgColor="#FCEE21" event={props.setModal}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </Button>
      </div>
    </section>
  );
}
