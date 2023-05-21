import React from 'react';
import styled from 'styled-components';

export const ProgressCircle = ({ progress, size = 150 }) => {
  const CENTER = size / 2;
  const STROKE_WIDTH = size * 0.1;
  const RADIUS = CENTER - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = Math.PI * RADIUS * 2;
  const OFFFSET = ((100 - progress) / 100) * CIRCUMFERENCE;

  return (
    <Wrappper>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={`${size}px`}
        height={`${size}px`}
        className='circle__progress'
      >
        <circle
          className='circle__background'
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          stroke={'#cccccc99'}
          fill='transparent'
        />
        <circle
          className='circle__fill'
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke='#333333cc'
          fill='transparent'
          strokeWidth={STROKE_WIDTH}
          style={{
            strokeDasharray: CIRCUMFERENCE,
            /*strokeDashoffset: CIRCUMFERENCE * (1 - progress)*/
            strokeDashoffset: OFFFSET
          }}
        />
      </svg>
    </Wrappper>
  );
};

const Wrappper = styled.div`
  & .circle__progress {
    transform: rotate(-90deg);
    fill: none;
  }
`;
