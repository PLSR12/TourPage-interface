import styled from 'styled-components'

export const ComponentButton = styled.button`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-transform: uppercase;
  border: 0;
  border-radius: 15px;
  margin-bottom: 20px;
  background-color: #0568a6;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 0px 10px #949494;

  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.8;
  }
`
