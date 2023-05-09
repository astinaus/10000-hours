import React, { useState } from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import InputDisplay from './Components/InputDisplay/InputDisplay';
import OutputDisplay from './Components/OutputDisplay/OutputDisplay';
import Modal from './Components/Modal/Modal';
import Loading from './Components/Loading/Loading';

function App() {
  const [fieldInput, setFieldInput] = useState('');
  const [hourInput, setHourInput] = useState('');
  const [resultDisplay, setResultDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fieldResult, setFieldResult] = useState('');
  const [hourResult, setHourResult] = useState('');

  const handleFieldChange = (e) => {
    setFieldInput(e.target.value);
  };

  const handleHourChange = (e) => {
    setHourInput(Math.floor(e.target.value));
  };

  const handleResultDisplay = () => {
    if (!fieldInput || !hourInput) return alert('입력되지 않았습니다.');
    if (hourInput > 24) return alert('24시간을 초과할 수 없습니다.');
    if (hourInput < 1) return alert('1시간 미만은 입력할 수 없습니다.');
    setFieldResult(fieldInput);
    setHourResult(hourInput);
    if (resultDisplay) setResultDisplay(false);
    setIsLoading(true);
    setTimeout(() => {
      setResultDisplay(true);
    }, 2000);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleModalOpen = () => {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false);
  };

  const handleCopyURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      alert('URL이 복사되었습니다.');
    } catch (error) {
      alert('URL 복사에 실패했습니다.');
    }
  };

  return (
    <>
      <Reset />
      <Header />
      <InputDisplay
        field={fieldInput}
        hour={hourInput}
        onChangeField={handleFieldChange}
        onChangeHour={handleHourChange}
        onClick={handleResultDisplay}
      />
      {isLoading && <Loading />}
      {resultDisplay && (
        <OutputDisplay
          field={fieldResult}
          hour={hourResult ? parseInt(hourResult) : null}
          display={resultDisplay}
          setModal={handleModalOpen}
          copyURL={handleCopyURL}
        />
      )}
      {isModalOpen && <Modal setModal={handleModalOpen} />}
      <Footer />
    </>
  );
}
export default App;
