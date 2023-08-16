import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListBooks from '../../components/ListBooks';
import api from '../../services/api';

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

  >input{
    display: block;
    padding: 5px;

    border: none;
    border-bottom: 2px solid ${({theme}) => theme.COLORS.gray};

    background-color: transparent;
    outline: none;
    margin: 20px auto;
    transition: all.2s;

    &:focus{
      border-bottom: 2px solid ${({theme}) => theme.COLORS.primary};
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
      <input
        type="search"
        placeholder='Buscar Livros'
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
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
