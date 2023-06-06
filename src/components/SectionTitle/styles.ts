import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 20px 0;

  > div {
    width: 8px;
    background-color: ${(props) => props.theme.blueColor};
  }

  h3 {
    color: ${(props) => props.theme.textColor};
    font-size: 24px;
    font-style: italic;
  }
`
