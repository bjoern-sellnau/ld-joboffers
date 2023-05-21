import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

export const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <h1>
        Job<span>offers</span>
      </h1>
      <LinkList>
        <Link href='/'>
          <NavLink active={router.pathname === '/dashboard'}>Dashboard</NavLink>
        </Link>
        <Link href='/offers'>
          <NavLink active={router.pathname === '/offers'}>Offers</NavLink>
        </Link>
        <Link href='/recruiters'>
          <NavLink active={router.pathname === '/recruiters'}>
            Recruiter
          </NavLink>
        </Link>
      </LinkList>
    </Container>
  );
};

// Styles
const Container = styled.div`
  position: fixed;
  background: #f5f5f5;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 15px 15px 15px;
  border-bottom: 1px solid #e5e5e5;
  z-index: 2;
  & h1 {
    margin: 0;
    font-weight: bold;
    font-family: 'Open Sans';

    span {
      font-weight: normal;
    }
  }
`;
const LinkList = styled.nav`
  margin-top: 15px;
`;
const NavLink = styled.a`
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  border-radius: 5px;
  font-family: 'Open Sans';
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  transition: background 0.5s;
  background: ${props => (props.active ? 'gray' : 'transparent')};
  margin-right: 5px;
  color: ${props => (props.active ? 'white' : 'black')};
  &:hover {
    background: ${props => (props.active ? 'gray' : '#ccc')};
  }
`;
