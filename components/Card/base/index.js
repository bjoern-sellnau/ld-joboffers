import React from 'react';
import styled from 'styled-components';

export const Card = ({ id, children, backgroundColor, fav }) => {
  return (
    <Body backgroundColor={backgroundColor}>
      <Fav className={'fav-icon'} fav={fav}>
        <svg className='heart' viewBox='0 0 32 29'>
          <path
            d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'
          />
        </svg>
      </Fav>
      {children}
    </Body>
  );
};

// Styles
const Body = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  border-top: ${props =>
    props.backgroundColor !== undefined
      ? `5px solid ${props.backgroundColor}`
      : '5px solid #fcfcfc'};
  background: #f5f5f5;
  text-align: center;
  margin: 15px;
  padding: 15px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
  transition: box-shadow 0.25s, background 0.25s;
  &:hover {
    box-shadow: 0 2px 45px rgba(0, 0, 0, 0.25);
    background: #fff;
  }
  &:hover .fav-icon,
  &:hover .edit-icon {
    background: #e5e5e5;
  }
  &:hover .card-badge {
    color: rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
  }
`;
const Fav = styled.div`
  display: ${props => (props.fav === undefined && 'none') || 'block'};
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: not-allowed;
  transition: background 0.5s;
  z-index: 1;
  padding: 15px;
  font-weight: bold;
  & .heart {
    fill: ${props => (props.fav && 'red') || '#cc000022'};
  }
`;
