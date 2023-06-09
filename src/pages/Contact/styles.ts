import { styled } from 'styled-components'

export const ContactContainer = styled.div`
  p {
    margin-top: 20px;
    color: ${(props) => props.theme.textColor};
    width: 300px;
    line-height: 25px;
    font-style: oblique;
  }
`
