import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Container>
      <small>&copy; 2020 loona! designs / bjoern sellnau</small>
    </Container>
  );
};

// Styles
const Container = styled.div`
  position: fixed;
  background: #f5f5f5;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  border-top: 1px solid #e5e5e5;
  z-index: 2;
  & small {
    margin: 0;
    font-weight: 600;
    font-family: 'helvetica';
  }
`;
