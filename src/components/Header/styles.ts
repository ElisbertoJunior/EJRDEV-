import { Link } from 'react-router-dom'
import { keyframes, styled } from 'styled-components'
import { breakpoints } from '../../style'

export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`

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

    > nav {
      ${Links} {
        @media (max-width: ${breakpoints.tablet}) {
          display: none;
        }
      }
    }
  }
`

export const ItemLink = styled(Link)`
  color: ${(props) => props.theme.blueColor};
  font-style: italic;
  font-weight: bold;
`

const slideAnimation = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: 500px; /* Altura máxima do menu */
    opacity: 1;
  }
`

export const NavMobile = styled.nav`
  display: none;
  justify-content: center;
  padding: 20px 0;

  ${Links} {
    flex-direction: column;
    gap: 24px;
  }

  &.is-open {
    display: flex;
    animation: ${slideAnimation} 2s ease-in-out forwards;
  }
`
export const Hamburger = styled.div`
  width: 32px;
  cursor: pointer;

  div {
    height: 2px;
    display: none;
    background-color: ${(props) => props.theme.blueColor};
    width: 100%;
    margin-bottom: 4px;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`
