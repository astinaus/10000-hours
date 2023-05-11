import React, { useState } from 'react';
import Button from '../Button/Button';
import './InputDisplay.css';

export default function InputDisplay({ setInputResult, handleResultDisplay }) {
  const [fieldInput, setFieldInput] = useState('');
  const [hourInput, setHourInput] = useState('');

  const handleInputReset = () => {
    setFieldInput('');
    setHourInput('');
  };

  const handleFieldChange = (e) => {
    setFieldInput(e.target.value);
  };

  const handleHourChange = (e) => {
    setHourInput(Math.floor(e.target.value));
  };

  const submitData = (event) => {
    event.preventDefault();
    if (!fieldInput || !hourInput) return alert('입력되지 않았습니다.');
    if (hourInput > 24) return alert('24시간을 초과할 수 없습니다.');
    if (hourInput < 1) return alert('1시간 미만은 입력할 수 없습니다.');
    const result = {
      field: fieldInput,
      hour: hourInput,
    };
    setInputResult(result);
    handleResultDisplay();
    handleInputReset();
  };

  return (
    <section className="input-container">
      <h2 className="quote-title">
        “연습은 어제의 당신보다 당신을 더 낫게 만든다.”
      </h2>
      <q className="quote-desc">
        <strong>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </q>

      <form className="input-form" onSubmit={submitData}>
        <p>
          <span>나는</span>
          <input
            type="text"
            placeholder="예)프로그래밍"
            id="field"
            value={fieldInput}
            onChange={handleFieldChange}
          />
          <label className="a11y-hidden" htmlFor="field">
            분야
          </label>
          <span>전문가가 될 것이다.</span>
        </p>
        <p>
          <span>그래서 앞으로 매일 하루에</span>
          <input
            type="number"
            min={1}
            max={24}
            placeholder="예)5"
            id="hour"
            value={hourInput}
            onChange={handleHourChange}
          />
          <label className="a11y-hidden" htmlFor="hour">
            시간
          </label>
          <span>시간씩 훈련할 것이다.</span>
        </p>
        <p>
          <Button bgColor="#FCEE21" type="submit">
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </Button>
        </p>
      </form>
    </section>
  );
}
