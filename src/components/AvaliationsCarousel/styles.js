import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 35px;
  padding: 35px 0;

  .rec.rec-arrow {
    background-color: #0568a6;
    color: #ffffff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
  }

  .rec.rec-arrow:hover {
    border: 2px solid #0568a6;
    background-color: #ffffff;
    color: #0568a6;
  }

  .rec.rec-arrow:disabled {
    border: none;
    color: #ffffff;
  }
  .rec.rec-arrow:disabled {
    border: none;
    color: #000;
  }
  .rec.rec-dot {
    background-color: #0568a6;
    box-shadow: 0 0 1px 2px #fff;
    cursor:none;
  }
  .rec.rec-dot:active {
    background-color: #000;
    box-shadow: 0 0 1px 3px #fff;
    cursor:none;
  }

  
`
export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextAvaliation = styled.p`
  font-size: 19px;
  flex-wrap: wrap;
  padding-right: 5px;
  margin: auto;
  color: #fff;
`

export const ContainerAvaliation = styled.div`
  .avaliacao {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 10px;
  }
  .avaliacao h2 {
    font-size: 17px;
    padding-right: 5px;
    margin: auto;
    color: #fff;
  }
  .caixa-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0568a6;
    border-bottom-left-radius: 35px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.178);
  }
  .caixa-text p {
    font-size: 19px;
    padding: 40px 40px 20px 40px;
    text-align: center;
    color: #fff;
    max-width: 600px;
  }
  .caixa-text svg {
    color: yellow;
    padding: 1px;
    height: 15px;
    width: 15px;
  }
  .caixa-text h1 {
    padding: 10px 0px 40px 0px;
    font-size: 19px;
    color: #fff;
  }

  @media (max-width: 548px) {
    .caixa-text p {
      font-size: 12px;
      padding: 20px 20px 10px 20px;
      text-align: center;
      color: #fff;
      max-width: 240px;
    }
    .caixa-text h1 {
      padding: 10px 0px 20px 0px;
      font-size: 12px;
    }
    .avaliacao h2 {
      font-size: 12px;
    }
    .caixa-text svg {
      height: 12px;
      width: 12px;
    }
  }
  @media (max-width: 375px) {
    .caixa-text p {
      font-size: 11px;
      padding: 20px 20px 0px 20px;
      max-width: 190px;
    }
    .caixa-text h1 {
      font-size: 11px;
      padding-top: 5px;
    }
    .avaliacao h2 {
      font-size: 11px;
      padding-top: 5px;
    }
    .caixa-text svg {
      height: 11px;
      width: 11px;
      padding-top: 5px;
    }
  }
`
