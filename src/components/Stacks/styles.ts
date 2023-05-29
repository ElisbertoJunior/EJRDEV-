import { styled } from 'styled-components'

export const StackList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`
export const StackItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 80px;
  }

  p {
    font-size: 12px;
    color: #d0cccc;
    font-style: oblique;
    text-align: center;
  }
`
