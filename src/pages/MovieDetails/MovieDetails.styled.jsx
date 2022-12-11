import styled from 'styled-components';

export const Btn = styled.button`
  padding: 8px 16px;
  border: none;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #3f51b5;
  color: white;
  text-decoration: none;
  font-family: inherit;
  font-size: 16px;
  /* line-height: 10px; */
  font-style: normal;
  font-weight: 500;
  min-width: 100px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #303f9f;
    transform: scale(1.1);
  }
`;