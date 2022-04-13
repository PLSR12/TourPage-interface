import React, { useEffect, useState } from 'react'

import {
  Container,
  ContainerItems,
  TextAvaliation,
  ContainerAvaliation
} from './styles'

import Carousel from 'react-elastic-carousel'

import api from '../../services/api'

export function AvaliationsCarousel () {
  const [avaliations, setAvaliations] = useState([])

  useEffect(() => {
    async function loadAvaliations () {
      const { data } = await api.get('valuation')

      setAvaliations(data)
    }

    loadAvaliations()
  }, [])



  return (
    <Container>
      <Carousel
        itemsToShow={1}
        style={{ width: '80%' }}
      >
        {avaliations &&
          avaliations.map(valuation => (
            <ContainerItems key={valuation.id}>
              <ContainerAvaliation>
                <div class='caixa-text'>
                  <TextAvaliation> {valuation.valuation}</TextAvaliation>
                  <div class='avaliacao'>
                    <h2>Avaliação:</h2>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      class='bi bi-star-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      class='bi bi-star-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      class='bi bi-star-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      class='bi bi-star-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      class='bi bi-star-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                    </svg>
                  </div>
                  <div>
                    <h1>{valuation.name}</h1>
                  </div>
                </div>
              </ContainerAvaliation>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
