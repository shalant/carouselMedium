import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  `;



export default function App () {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    const handleAutoplay = setInterval(handleClickNext, 3000);
    return () => clearInterval(handleAutoplay);
  }, [handleClickNext])

  const images = [];

  const handleClickPrev = () => {
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };

  const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  return (
    <Wrapper className='App'>
      <Carousel
        images={images}
        setWidth={setWidth}
        xPosition={xPosition}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
    </Wrapper>
  );
}
