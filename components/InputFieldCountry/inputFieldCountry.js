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
  background: var(--flatcolorfull);
  width: 185px;
  height: 35px;
  margin: 30px 0px 5px 30px;
  padding: 0px 20px 0px 6px; // in dem Input Feld
  font-size: 0.5rem;
  border: ${({ theme }) => theme.border};
  align-items: center;
  transition: 0.6s;
  color: var(--textalternativ);
  cursor: pointer;
  &:hover {
    color: var(--textalternativ);
  }
  @media screen and (min-width: 700px) {
    width: 400px;
    height: 70px;
    font-size: 1.5rem;
    margin: 50px 0px 5px 50px;
  }
`;
