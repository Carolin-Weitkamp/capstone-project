import styled from 'styled-components';
export { InputFieldCountry };

function InputFieldCountry({
  countryArray,
  selectedCountry,
  setSelectedCountry,
}) {
  function handleChange(event) {
    setSelectedCountry(event.target.value);
  }

  return (
    <StyledSelect value={selectedCountry} onChange={handleChange}>
      <option value="">Wähle dein Land</option>
      {countryArray.map(country => (
        <option key={country.iso} value={country.iso}>
          {country.countryname}
        </option>
      ))}
    </StyledSelect>
  );
}
export default InputFieldCountry;

const StyledSelect = styled.select`
  background: green;
  width: 200px;
  height: 35px;
  margin: 5px 0px 5px 0;
  padding: 0px 20px 0px 6px; // in dem Input Feld
  font-size: 0.5rem;
  border: 0.25vw solid white;
  align-items: center;
  color: white;
  transition: 0.6s;
  > p {
    color: white;
  }
  > li {
    color: white;
  }

  &:hover {
    background-color: white;
  }

  &:hover {
    color: yellowgreen;
  }

  @media screen and (min-width: 700px) {
    width: 400px;
    height: 55px;
    margin: 10px 10px 10px 0;
    padding: 0px 0px 0px 12px;
    font-size: 2rem;
  }
  @media screen and (min-width: 1500px) {
    width: 800px;
    height: 140px;
    margin: 20px 0 20px 0;
    padding: 0px 40px 0px 24px;
    font-size: 4rem;
  }
`;
