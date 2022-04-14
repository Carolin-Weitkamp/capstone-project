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
  background: var(--green-gradient-tb);
  width: 200px;
  height: 35px;
  margin: 30px 0px 5px 30px;
  padding: 0px 20px 0px 6px; // in dem Input Feld
  font-size: 0.5rem;
  border: 0.25vw solid var(--lightgreen);
  align-items: center;
  color: var(--lightgreen);
  transition: 0.6s;
  cursor: pointer;
  > p {
    color: green;
  }

  &:hover {
    color: green;
  }
  > ul {
    color: hotpink;
    list-style: none;
  }
  > li {
    color: hotpink;
    list-style: none;
  }
`;
