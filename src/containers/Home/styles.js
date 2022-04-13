import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: #0568a6;
`

export const ContainerItems = styled.div`
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  flex-wrap: wrap;
  word-wrap: break-word;
  color: #ffff;
`

export const ContainerButtons = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
`

export const International = styled.button`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  font-size: 1rem;
  font-weight: bold;
  background: #ffff;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  color: #000;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`

export const National = styled.button`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  font-size: 1rem;
  font-weight: bold;
  background: #ffff;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  color: #000;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
