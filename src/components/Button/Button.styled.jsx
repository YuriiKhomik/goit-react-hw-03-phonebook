import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  background-color: ${p => p.theme.colors.backgroundGrey}
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;
