import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  color: ${(props) => props.theme.textColor};
  img {
    width: 130px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
