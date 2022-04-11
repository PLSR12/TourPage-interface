import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin: auto;
`

export const ContainerItems = styled.div`
  min-height: 550px;
  width: 380px;
  background-color: white;
  margin: 20px 15px 0px 15px;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.192);
  
  @media (max-width: 548px) {
    width: 330px;
    height: fit-content;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 10px;

  @media (max-width: 548px) {
    width: 100%;
    height: 220px;
  }
`

export const PackName = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  padding: 20px 0px;
  text-align: center;
`
export const PackDescription = styled.p`
  padding-bottom: 20px;
  text-align: center;
  font-size: 1rem;
  color: #000000;
`

export const PackPrice = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 21px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #000000;
`
export const Button = styled.button`
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
  animation-name: botao;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`
