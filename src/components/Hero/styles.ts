import { styled } from 'styled-components'
import { breakpoints } from '../../style'

export const HeroContainer = styled.section`
  padding: 80px 0;
  color: ${(props) => props.theme.textColor};

  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 24px;
  }
`
export const HeroContent = styled.div`
  p {
    padding: 24px 0;
    width: 80%;
    font-weight: 100;
    font-style: oblique;
  }

  ul {
    display: flex;

    img {
      height: 40px;
    }
  }
`
export const MainButton = styled.button`
  background-color: ${(props) => props.theme.blueColor};
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-style: oblique;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  img {
    height: 16px;
  }

  width: 250px;
  height: 40px;

  &:hover {
    opacity: 0.9;
  }
`
