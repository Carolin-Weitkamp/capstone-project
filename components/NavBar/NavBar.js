import styled from 'styled-components';
export { NavBar };

function NavBar() {
  return (
    <NavBarStyle>
      {/* <Link href="/" passHref></Link> */}
      <p>Home</p>
    </NavBarStyle>
  );
}
export default NavBar;

const NavBarStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1;
  border: 0.35vw solid white;
  width: 100vw;
  height: 40px;
  bottom: 0px;
  right: 0;
  background: white;
  > p {
    font-weight: medium;
    display: flex;
    color: black;
    padding-left: 30px;
    font-size: 20px;

    &:active {
      color-scheme: pink;
    }
  }
`;
