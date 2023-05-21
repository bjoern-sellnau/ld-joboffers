import styled from 'styled-components';

export const Badge = styled.span`
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  height: 20px;
  width: 25px;
  font-size: 14px;
  display: inline-block;
  padding: ${props => (props.size === 'big' ? '5px 3px' : '2px 0')};
  margin-top: ${props => (props.size === 'big' ? '5px' : '0')};
`;
export const HR = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
`;
