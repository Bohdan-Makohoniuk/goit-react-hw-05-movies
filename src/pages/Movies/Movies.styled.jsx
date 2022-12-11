import styled from '@emotion/styled'

export const Input = styled.input`
  display: inline-block;
  width: 30%;
  font: inherit;
  border:none;
  border-bottom:1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 4px;
  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border: none;
  margin-left: 15px;
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

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
`;

// const ButtonIcon = styled.button`
//   display: flex;
//   align-items: center;
//   background-color: inherit;
//   width: 30px;
//   height: 30px;
//   border: 0;
//   margin-right: 4px;
//   margin-left: 4px;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   cursor: pointer;
//   outline: none;
//   &:hover {
//     transform: scale(1.2);
//   }
// `;


