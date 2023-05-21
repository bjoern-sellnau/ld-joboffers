import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Percent } from '../Percent';
import { ProgressCircle as Progress } from '../Progress';

export const Widget = ({ title, value = false, children }) => {
  return (
    <Wrapper>
      {value !== false ? (
        <>
          <ProgressContainer>
            <Progress progress={value} />
            <Percent progress={value} />
          </ProgressContainer>
          <p>{title}</p>
        </>
      ) : (
        <>{children}</>
      )}
    </Wrapper>
  );
};

Widget.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
};

const ProgressContainer = styled.div`
  margin-top: 15px;
  position: relative;
`;

const Wrapper = styled.div`
  min-width: 200px;
  min-height: 150px;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  border-top: 5px solid #f0f0f0;
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
  :hover .edit-icon {
    background: #f5f5f5;
  }
  & p {
    font-size: 14px;
    position: relative;
    bottom: 0;
  }
`;
