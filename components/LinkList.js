import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const LinkList = ({
  items = [],
  active,
  itemRenderer = (item, idx, active, onChange) => (
    <NavLink key={idx} active={active === idx} onClick={() => onChange(idx)}>
      {typeof item.label === 'undefined' ? item : item.label}
      {active === idx &&
        typeof item.extras !== 'undefined' &&
        ` (${item.extras.length})`}
    </NavLink>
  ),
  onChange
}) => (
  <List>
    <div>
      {items.map((item, idx) => itemRenderer(item, idx, active, onChange))}
    </div>
  </List>
);

// Styles
const List = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 15px 15px -5px;
  & div {
  }
`;
const NavLink = styled.a`
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  border-radius: 5px;
  font-family: 'Open Sans';
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  background: ${props => (props.active ? '#cc0000' : 'transparent')};
  margin-right: 5px;
  color: ${props => (props.active ? 'white' : 'black')};
  transition: background 0.5s;
  &:hover {
    background: ${props => (props.active ? '#cc0000' : '#ff000033')};
  }
`;

LinkList.propTypes = {
  item: PropTypes.object,

  idx: PropTypes.number,
  active: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func
};
