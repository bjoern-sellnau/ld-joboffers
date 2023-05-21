import React from 'react';
import styled from 'styled-components';

export const Percent = ({ progress }) => {
  return (
    <Wrapper>
      <Content>{progress === '?' ? '?' : `${progress.toFixed(2)}%`}</Content>
    </Wrapper>
  );
};

// style
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 25px;
  font-weight: bold;
`;
