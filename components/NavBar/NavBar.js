import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import darklight from '/public/pictures/darklight.svg';
import darklightwhite from '/public/pictures/darklightwhite.svg';

export { NavBar };

export default function NavBar({ themeToggler, toggleButton }) {
  return (
    <NavBarStyle>
      <Link href="/" passHref>
        <p>Start</p>
      </Link>
      <Link href="/calculator" passHref>
        <p>Rechner</p>
      </Link>
      <Link href="/green-hosts" passHref>
        <p>Hosting</p>
      </Link>
      <DayLightButton onClick={themeToggler}>
        {toggleButton === false ? (
          <Image src={darklightwhite} alt={'schwarz weißer Button'} />
        ) : (
          <Image src={darklight} alt={'schwarz weißer Button'} />
        )}
      </DayLightButton>
    </NavBarStyle>
  );
}

const DayLightButton = styled.button`
  background: none;
  border: none;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 35px;
  right: 0;
  margin-right: 15px;
  @media screen and (min-width: 700px) {
    width: 45px;
    margin-right: 60px;
  }
`;

const NavBarStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
  border: ${({ theme }) => theme.border};
  box-shadow: pink;
  width: 100%;
  height: 50px;
  bottom: 0px;
  right: 0;
  background: ${({ theme }) => theme.navbar};
  cursor: pointer;
  & :hover {
    color: ${({ theme }) => theme.border};
  }
  > p {
    font-weight: medium;
    display: flex;
    padding-left: 30px;
    font-size: 0.9rem;
    transition: 0, 2s;
    margin-right: 10px;
  }
  @media screen and (min-width: 700px) {
    height: 70px;
    top: 0px;
    > p {
      padding-left: 60px;
      font-size: 30px;
    }
  }
  @media screen and (min-width: 1500px) {
    height: 70px;
    top: 0px;
    > p {
      padding-left: 60px;
      font-size: 30px;
    }
  }
`;
