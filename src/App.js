import React, { useState } from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import InputDisplay from './Components/InputDisplay/InputDisplay';
import OutputDisplay from './Components/OutputDisplay/OutputDisplay';
import Modal from './Components/Modal/Modal';

function App() {
  const [fieldInput, setFieldInput] = useState('');
  const [hourInput, setHourInput] = useState('');
  const [resultDisplay, setResultDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFieldChange = (e) => {
    setFieldInput(e.target.value);
  };

  const handleHourChange = (e) => {
    setHourInput(e.target.value);
  };

  const handleResultDisplay = () => {
    if (!fieldInput || !hourInput) return alert('입력되지 않았습니다.');
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
      <OutputDisplay
        field={fieldInput}
        hour={hourInput ? parseInt(hourInput) : null}
        display={resultDisplay}
        loading={isLoading}
        setModal={handleModalOpen}
        copyURL={handleCopyURL}
      />
      <Modal modal={isModalOpen} setModal={handleModalOpen} />
      <Footer />
    </>
  );
}
export default App;
