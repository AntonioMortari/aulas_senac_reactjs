import React, {useState} from 'react';
import styled from 'styled-components'

import api from '../../services/api'
import {useNavigate} from 'react-router-dom'

const Conteiner = styled.div`

    box-shadow: 0px 0px 10px #26262634;
    padding: 20px;
    border-radius: 5px;

    width: 350px;

    >h1{
        color: ${({theme}) => theme.COLORS.primary};
        font-weight: normal;
        font-size: 2.8rem;
    }

    >form{
        display: flex;
        flex-direction: column;

        >label{
            display: flex;
            flex-direction:column;
            margin-bottom: 10px;

            >input{
                padding: 8px;
                border-radius: 5px;
                border: none;
                background-color: ${({theme}) => theme.COLORS.gray};

                &:focus{
                    outline: 2px solid ${({theme}) => theme.COLORS.primary};
                }

            }
        }

        >button{
            padding: 5px;
            background-color: ${({theme}) => theme.COLORS.primary};
            border: none;
            border-radius: 5px;
            color: #f6f6f6;

            margin-top: 15px;

            transition: .3s;

            &:hover{
                transform: translateY(-20%);
                box-shadow: 0px 0px 10px ${({theme}) => theme.COLORS.primary};
            }
        }
    }
`

const initialValues = {
    title:'',
    price:0,
    image:'',
    url:''
}

function Cadastrar (){
    const [values, setValues] = useState(initialValues)
    const navigate = useNavigate()

    const onSubmit = (e) =>{
        e.preventDefault()

        const url = '/books'

        api.post(url, values)
            .then(() => {
                navigate('/')
            })
    }

    const onChange = (e) =>{
        const {name, value} = e.target
        let newState = {...values}
        newState[name] = value
        setValues(newState)
    }

    return(
        <Conteiner>
            <h1>Cadastrar</h1>

            <form onSubmit={onSubmit}>

                <label htmlFor="title">
                    Título
                    <input type="text" name="title" id="title" onChange={onChange} />
                </label>

                <label htmlFor="image">
                    Imagem
                    <input type="text" name="imagem" id="imagem" onChange={onChange} />
                </label>

                <label htmlFor="url">
                    URL
                    <input type="text" name="url" id="url" onChange={onChange} />
                </label>

                <label htmlFor="price">
                    Preço
                    <input type="text" name="price" id="price" onChange={onChange} />
                </label>

                <button>
                    Cadastrar
                </button>


            </form>
        </Conteiner>
    )
}

export default Cadastrar;