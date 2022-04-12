import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: max-content;
  margin: auto;
`

export const ContainerItems = styled.div`
  height: 580px;
  width: 380px;
  background-color: white;
  margin: 20px 15px 0px 15px;
  border-radius: 10px;
  padding: 5px;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.192);

  @media (max-width: 548px) {
    width: 340px;
    height: fit-content;
  }

  @media (max-width: 375px) {
    width: 300px;
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

  @media (max-width: 375px) {
    width: 100%;
    height: 200px;
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
  margin-bottom: 30px;
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
  background-color: #0568a6;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0px 0px 10px #949494;
  animation-name: botao;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
`
