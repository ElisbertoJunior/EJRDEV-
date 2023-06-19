import { styled } from 'styled-components'

export const ProjectButton = styled.button`
  width: 25%;
  padding: 8px;
  background-color: ${(props) => props.theme.blueColor};
  color: #fff;
  margin: 140px auto 20px 37%;
  border: none;
  border-radius: 8px;
  font-style: oblique;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`
