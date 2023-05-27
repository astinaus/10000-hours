import React, { useState } from 'react';
import Button from '../Button/Button';
// import './InputDisplay.css';
import desc from '../../Assets/Images/quotes.png';
import click from '../../Assets/Images/click.png';

import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  color: #fff;
  line-height: 2.5rem;
  margin-bottom: 130px;
  font-family: 'GmarketSansMedium';
`;

const QuoteTitle = styled.h2`
  font-family: 'OTEnjoystoriesBA';
  font-size: 2.25rem;
  color: #f5df4d;
  margin-top: 46px;
  font-weight: 700;

  @media (389px < width < 610px) {
    margin-top: 30px;
  }
`;

const QuoteDesc = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  margin: 50px auto 0;
  background-image: url(${desc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 25px;
  max-width: 493px;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
  }

  @media (389px < width < 610px) {
    width: 65%;
    background-position: 0 20px;
    margin-top: 50px;
  }
`;

const InputForm = styled.form`
  margin-top: 102px;
  font-size: 1.5rem;

  label {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  p:first-child {
    margin-bottom: 27px;
  }

  p:last-child {
    margin-top: 115px;
    position: relative;
  }

  p:last-child::after {
    content: '';
    display: inline-block;
    width: 64px;
    height: 72px;
    background: url(${click}) no-repeat;
    transform: translateX(8px) translateY(25px);
    background-size: cover;
    position: absolute;
  }

  input {
    border-radius: 7px;
    width: 100%;
    max-width: 200px;
    margin: 0 17px;
    font-size: 1.5rem;
    padding: 15px 20px;
  }

  input::placeholder {
    font-family: 'GmarketSansMedium';
    color: #babcbe;
  }

  @media (max-width: 768px) {
    p:nth-child(2) span:first-child {
      display: block;
      margin-bottom: 27px;
    }
  }

  @media (389px < width < 610px) {
    margin-top: 50px;

    button {
      border-radius: 13px;
      width: 260px;
    }
    p:last-child::after {
      width: 40px;
      height: 42px;
      transform: translateX(8px) translateY(45px);
    }
    p:last-child {
      margin-top: 50px;
    }

    input {
      width: 100px;
      padding: 10px 20px;
    }

    .input-container {
      margin-bottom: 90px;
    }

    p:first-child {
      margin-bottom: 16px;
    }

    p:nth-child(2) span:first-child {
      margin-bottom: 16px;
    }
  }
`;

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
    <Section>
      <QuoteTitle>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</QuoteTitle>
      <QuoteDesc>
        <strong>1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </QuoteDesc>

      <InputForm onSubmit={submitData}>
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
      </InputForm>
    </Section>
  );
}
