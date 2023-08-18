import React, { useState, useEffect } from 'react';

import ListBooks from '../../components/ListBooks';
import Input from '../../components/InputSearch'
import Title from '../../components/Title'
import ButtonAddBook from '../../components/ButtonAddBook';

import api from '../../services/api';
import styled from 'styled-components';

import {FaPlus} from 'react-icons/fa'



const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;

  >.conteiner-search{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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
      <Title content='Minha lista de' span='Livros' />

      <div className='conteiner-search'>
        {/* componente de input */}
        <Input type='search' placeholder='Busque um livro' value={search} onChange={(ev) => setSearch(ev.target.value)} />
        <ButtonAddBook>
          <FaPlus />
        </ButtonAddBook>
      </div>

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
