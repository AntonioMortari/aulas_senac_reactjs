import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import styled from 'styled-components'

import Title from '../../components/Title/'
import ButtonAddBook from '../../components/ButtonAddBook'

const Conteiner = styled.div`

    >table{
        margin: 0px auto;
        max-width: 600px;
        color: #262626;
        border-collapse: collapse;
        overflow-x: auto;

        @media screen and (max-width:400px){
            >thead > tr > th:first-child{
                display: none;
            }
        }

        >thead{
            background-color: ${({theme}) => theme.COLORS.primary};
            color:#f6f6f6;
            position: sticky;
            top: 0;
            
            >tr > th{
                padding: 5px;
                font-weight: normal;
                border-right: 1px solid ${({theme}) => theme.COLORS.gray};
            }
        }

        >tbody{
            tr{
                transition: .3s;
                &:hover{
                    background-color: rgba(38, 38, 38, 0.027);
                }
            }
            
            tr td{
                padding: 10px;
                border-bottom: 1px solid ${({theme}) => theme.COLORS.gray};
                border-right: 1px solid ${({theme}) => theme.COLORS.gray};
            }

            tr td img{
                width:70px;
            }

            tr .image{
                @media screen and (max-width:400px){
                    display: none;
                }
            }

            tr .price{
                color: ${({theme}) => theme.COLORS.secondary};
            }

            tr .link a{
                color: ${({theme}) => theme.COLORS.primary};
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }

            tr .actions button{
                display: block;
                margin: 10px auto;

                background-color: ${({theme}) => theme.COLORS.primary};
                border: none;
                border-radius: 5px;
                padding: 5px;
                color: #f6f6f6;

                transition: all 0.3s;

                &:hover{
                    filter: brightness(90%);
                }

            }

        }
    }

`

function Administrar() {
    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    const deleteBook = (id) =>{
        const url = `/books/${id}`
        api.delete(url)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    useEffect(() =>{
        const url = '/books'
        api.get(url)
            .then(response =>{
                setBooks(response.data)
            })
            .catch(err => console.log(err))
    },[books])

    
    return ( 
        <Conteiner>

            <Title content='Administrar' span='Livros' />

            <ButtonAddBook>
                Cadastrar Livro
            </ButtonAddBook>

            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>URL</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {books.map(book => {
                        return(
                            // renderizando os dados dos filmes
                            <tr key={book.id}>
                                <td className='image'><img src={book.img} alt={`Imagem do livro ${book.title}`} /></td>

                                <td>{book.title}</td>

                                <td className='price'>R${book.price}</td>

                                <td className='link'><a target='_blank' href={book.url}>Link</a></td>

                                <td className='actions'>
                                    <button onClick={() => navigate(`/editar/${book.id}`)}>Editar</button>
                                    <button onClick={() => deleteBook(book.id)}>Excluir</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </Conteiner>
     );
}

export default Administrar;