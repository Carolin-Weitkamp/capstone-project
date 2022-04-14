import styled from 'styled-components';
import Link from 'next/link';

export { NavBar };

export default function NavBar({ themeToggler }) {
  return (
    <NavBarStyle>
      <Link href="/" passHref>
        <p>Start</p>
      </Link>
      <Link href="/calculator" passHref>
        <p>Rechner</p>
      </Link>
      <Link href="/green-hosts" passHref>
        <p>Grünes Hosting</p>
      </Link>
      <button onClick={themeToggler}>☀️</button>
    </NavBarStyle>
  );
}

const NavBarStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
  border: 0.4vw solid var(--lightgreen);
  box-shadow: pink;
  width: 100vw;
  height: 40px;
  bottom: 0px;
  right: 0;
  background: var(--lightgreen);
  color: purple;
  cursor: pointer;
  & :hover {
    color: white;
  }
  > p {
    font-weight: medium;
    display: flex;
    padding-left: 30px;
    font-size: 0.7rem;
    transition: 0, 2s;

    /* &:active {
      color-scheme: pink;
    } */
  }
  @media screen and (min-width: 700px) {
    height: 60px;
    top: 0px;
    > p {
      padding-left: 50px;
      font-size: 20px;
    }
  }
  @media screen and (min-width: 1500px) {
    height: 100px;
    top: 0px;
    > p {
      padding-left: 50px;
      font-size: 40px;
    }
  }
`;
