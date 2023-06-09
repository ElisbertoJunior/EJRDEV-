import { styled } from 'styled-components'

export const CardContainer = styled.div`
  margin: 60px 0 0;
  border-radius: 10px;
  min-height: 500px;
  height: 100%;

  color: ${(props) => props.theme.textColor};
  font-style: oblique;

  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.11);
  transition: 0.5s;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 24px 16px;

    p {
      margin: 8px 0 0 0;
    }
  }

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
export const GitHubButton = styled.button`
  background: #4a4e74;
  width: 100%;
  padding: 8px 0;
  border: none;
  border-radius: 8px;
  margin-top: 8px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: #f5f5f5;
    font-weight: bold;
    font-style: oblique;
    font-size: 14;

    > img {
      height: 25px;
      width: 25px;
    }
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`
export const WebButton = styled(GitHubButton)`
  background: ${(props) => props.theme.blueColor};

  a {
    color: #f5f5f5;
  }
`
export const DeleteButton = styled(GitHubButton)`
  background: red;
  color: #f5f5f5;
  font-weight: bold;
  font-style: oblique;
`
