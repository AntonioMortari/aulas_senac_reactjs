import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'

import ConteinerForm from '../../components/ConteinerForm'
import Input from '../../components/Input'
import ButtonSubmit from '../../components/ButtonSubmit'


import { FaArrowLeft } from 'react-icons/fa'

const initialValues = {
    title: '',
    price: 0,
    img: '',
    url: ''
}

function Cadastrar() {
    const [values, setValues] = useState(initialValues)
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()

        if (values.title.length == 0) {
            alert('Informe no mínimo o título do livro!')
            return
        }

        values.img.length == 0 && (
            values.img = 'https://www.ceidra.org.py/img/imagennd.png'
        )

        const url = '/books'

        api.post(url, values)
            .then(() => {
                navigate('/')
            })
    }

    const onChange = (e) => {
        const { name, value } = e.target
        let newState = { ...values }
        newState[name] = value
        setValues(newState)
    }

    return (
        <ConteinerForm>
            <button onClick={() => {
                navigate('/')
            }} className='back-to-books'>
                <FaArrowLeft />
            </button>

            <h1>Cadastrar</h1>

            <form onSubmit={onSubmit}>

                <Input
                    txt='Título'
                    type='text'
                    name='title'
                    placeholder="Digite um nome para seu livro"
                    onChange={onChange}
                />

                <Input
                    txt='Imagem'
                    type='text'
                    name='img'
                    placeholder="insira a URL da imagem"
                    onChange={onChange}
                />

                <Input
                    txt='URL'
                    type='text'
                    name='url'
                    placeholder="insira a URL de compra"
                    onChange={onChange}
                />

                <Input
                    txt='Preço'
                    type='text'
                    name='price'
                    placeholder="Digite o preço do link"
                    onChange={onChange}
                />

                <ButtonSubmit txt='Cadastrar' />


            </form>
        </ConteinerForm>
    )
}

export default Cadastrar;