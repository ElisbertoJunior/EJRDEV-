import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.blueColor};
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 50%;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 32px;
  right: 32px;
  cursor: pointer;
`
