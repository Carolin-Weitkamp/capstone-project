import styled from 'styled-components';
import Link from 'next/link';
// import Image from 'next/image';
// import darklight from '/public/pictures/darklight.svg';
// import darklightwhite from '/public/pictures/darklightwhite.svg';

export { LegalBar };

export default function LegalBar({}) {
  return (
    <LegalBarStyle>
      <Link href="/impressum" passHref>
        <p>Imprint</p>
      </Link>
    </LegalBarStyle>
  );
}

const LegalBarStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
  border: ${({ theme }) => theme.border};
  box-shadow: pink;
  width: 40px;
  height: 100px;
  bottom: 100px;
  right: 0;
  /* background: ${({ theme }) => theme.navbar}; */
  cursor: pointer;
  & :hover {
    color: ${({ theme }) => theme.border};
  }
  > p {
    writing-mode: vertical-rl;
    transform:rotate(180deg);
    position: fixed;
    padding-left: 10px;
    font-size: 0.9rem;
    transition: 0, 2s;
    right: 0;
    margin-right: 0px;
    & :hover {
      color: hotpink;
    }
  }

  @media screen and (min-width: 700px) {
    position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
  border: ${({ theme }) => theme.border};
  box-shadow: pink;
  width: 100%;
  height: 40px;
  bottom: 0px;
  right: 0;
  background: ${({ theme }) => theme.navbar};
  cursor: pointer;
  & :hover {
    color: ${({ theme }) => theme.border};
  }
  > p {
    position: fixed;
    direction: rtl;
    writing-mode: horizontal-tb;
    transform:rotate(360deg);
    padding-left: 30px;
    font-size: 0.9rem;
    transition: 0, 2s;
    right: 0;
    margin-right: 60px;
    & :hover {
      color: hotpink;
    }
  }
`;
