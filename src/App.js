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
  const [resultDisplay, setResultDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputResult, setInputResult] = useState({});

  const handleResultDisplay = () => {
    if (resultDisplay) setResultDisplay(false);
    setIsLoading(true);
    setTimeout(() => {
      setResultDisplay(true);
    }, 2200);
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
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
        setInputResult={setInputResult}
        handleResultDisplay={handleResultDisplay}
      />
      {isLoading && <Loading />}
      {resultDisplay && (
        <OutputDisplay
          inputResult={inputResult}
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
