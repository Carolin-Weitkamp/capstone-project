import styled from 'styled-components';
export { NavBar };

function NavBar() {
  return (
    <NavBarStyle>
      <p>Home</p>
    </NavBarStyle>
  );
}
export default NavBar;

const NavBarStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 1;
  border: 0.35vw solid white;
  width: 100vw;
  height: 10vh;
  bottom: 0;
  right: 0;
  background: black;
  > p {
    margin-bottom: 0;
    font-weight: medium;
    color: white;
    padding-left: 30px;
    font-size: 4vw;
    bottom: 0;
    align-items: center;
    justify-content: space-evenly;
  }
`;
