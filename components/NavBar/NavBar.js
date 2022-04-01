import styled from 'styled-components';
export { NavBar };

function NavBar() {
  return (
    <NavBarStyle>
      <p>Home</p>
      <p> Hallo </p>
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
  top: 0;
  right: 0;
  background: black;
  > p {
    margin-top: 0;
    font-weight: medium;
    color: white;
    padding-left: 30px;
    font-size: 4vw;
    top: 0;
    align-items: center;
    justify-content: space-evenly;
  }
`;

//   position: absolute;
//   box-sizing: border-box;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   justify-content: space-evenly;
//   transition: 0.6s;

//    &:hover {
//     color: purple;
//   }
// `;
