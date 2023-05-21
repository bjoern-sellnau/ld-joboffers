import React from 'react';
import styled from 'styled-components';

export const Salary = ({ active, salary }) => {
  return (
    <>
      {active ? (
        <Text>
          {salary.min === salary.max ? (
            <> {salary.max} €</>
          ) : (
            <>
              {salary.min} € - {salary.max} €
            </>
          )}
        </Text>
      ) : null}
    </>
  );
};

const Text = styled.p`
  position: absolute;
  left: auto;
  right: auto;
  width: 100%;
  bottom: 75px;
  font-size: 20px;
  font-weight: 600;
  margin: 35px 0;
`;
