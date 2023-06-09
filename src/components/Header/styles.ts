import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 15px 0;
  -webkit-box-shadow: 0px 4px 7px -4px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 4px 7px -4px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 4px 7px -4px rgba(0, 0, 0, 0.09);

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => props.theme.backgroundColor};

  img {
    width: 120px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const ItemLink = styled(Link)`
  color: ${(props) => props.theme.blueColor};
  font-style: italic;
  font-weight: bold;
`
