import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import api from '../../../services/api'

import { ErrorMessage } from '../../../components'

import { Container, Label, Input, Button, LabelUpload } from './styles'

function EditPacks () {
  const [fileName, setFileName] = useState(null)
  const {
    push,
    location: {
      state: { international }
    }
  } = useHistory()
  const onSubmit = async data => {
    const internationalDataFormData = new FormData()

    internationalDataFormData.append('name', data.name)
    internationalDataFormData.append('price', data.price)
    internationalDataFormData.append('description', data.description)
    internationalDataFormData.append('file', data.file[0])

    await toast.promise(
      api.put(`international/${international.id}`, internationalDataFormData),
      {
        success: 'Produto editado com sucesso',
        error: 'Falha ao editar o produto'
      }
    )

    setTimeout(() => {
      push('/admin-internacionais')
    }, 2000)
  }
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    description: Yup.string().required('A descrição é obrigatório'),
    price: Yup.number().required('O peço é obrigatório'),
    file: Yup.mixed().test('required', 'Carregue uma imagem', value => {
      return value && value.length > 0
    })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Destino:</Label>
          <Input
            type='text'
            {...register('name')}
            defaultValue={international.name}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label> Descrição:</Label>
          <textarea
            type='text'
            {...register('description')}
            defaultValue={international.description}

          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>
        <div>
          <Label> Preço: </Label>
          <Input
            type='number'
            {...register('price')}
            defaultValue={international.price}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Caregue a imagem do pacote
              </>
            )}
            <input
              type='file'
              accept='image/png , image/jpeg'
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <Button type='submit'> Editar Pacote </Button>
      </form>
    </Container>
  )
}

export default EditPacks
