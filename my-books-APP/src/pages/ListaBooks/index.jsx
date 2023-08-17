import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ListBooks from '../../components/ListBooks';
import Input from '../../components/InputSearch'
import api from '../../services/api';

import {FaPlus} from 'react-icons/fa'



const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;

  >h1{
    color: #262626;
    font-weight: normal;
    text-align: center;

    >span{
      color: ${({theme}) => theme.COLORS.primary};
    }
  }

  >abbr > .button-plus{
    position:relative;
    left: 50px;
    padding: 8px;
    background-color: ${({theme}) => theme.COLORS.primary};
    border-radius: 5px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    >svg{
      width: 15px;
      height: 15px;
      color: #f6f6f6;
    }
  }


`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:10px;
`;

const Msg = styled.p`
  font-size: 2rem;
  color: #262626;
`

function ListaBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    const url = '/books';
    const params = {};

    if (search) {
      params.title_like = search;

      api.get('/books?_embed=books', { params })
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    } else {
      api.get(url)
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [search]);

  return (
    <Container>
      <h1>Minha Lista de <span>Livros</span></h1>

      {/* componente de input */}
      <Input type='search' placeholder='Busque um livro' value={search} onChange={(ev) => setSearch(ev.target.value)} />

      <abbr title="Cadastrar novo livro"><button onClick={() =>{
          navigate('/cadastrar')
      }} className='button-plus'><FaPlus /></button></abbr>

      <ListContainer>
        {books.length > 0 ? (
          books.map(book => (
            <ListBooks
              key={book.url}
              books={book}
            />
          ))
        ) : (
          <Msg>Nenhum livro encontrado!</Msg>
        )}
      </ListContainer>
    </Container>
  );
}

export default ListaBooks;
