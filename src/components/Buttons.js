import React from 'react';
import styled from 'styled-components';
import leftBtn from '../icons/left.svg'; // Svg Icon
import rightBtn from '../icons/right.svg';  // Svg Icon

const Button = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 5}px;
  right: ${props => props.side === 'next' && 5}px;
`;

function Buttons ({ handleClickPrev, handClickNext }) {
    return (
        <>
            <Button src={leftBtn} side='prev' onClick={handleClickPrev} />
            <Button src={rightBtn} side='prev' onClick={handleClickNext} />

        </>
    );
}

export default Buttons;