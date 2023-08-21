import React from 'react'
import styled from 'styled-components';

const ItemConteiner = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 10px #26262628;

  position: relative;

  height: 160px;
  width: 285px;
  padding: 10px;

  color: #29303b;

  margin-bottom: 30px;
  margin-right: 10px;

  transition:.3s;

  &:hover{
    background-color: #ebebeb;
  }
`;

const Thumbnaill = styled.img`
height: 100%;
width: 110px;
float: left;

margin-right: 15px;

border-radius: 5px;
`

const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`

const Price = styled.div`
  margin-bottom: 5px;
  color: ${({theme}) => theme.COLORS.secondary};
`;

const Button = styled.div`
  position: absolute;
  bottom: -10px;
  right: 10px;

  font-size: 14px;
  padding: 8px 15px;

  color: #f6f6f6;
  background-color: ${({theme}) => theme.COLORS.primary};

  border-radius: 4px;

  transition:.4s;

  &:hover{
    transform:translateY(-10%);
    box-shadow:0px 0px 8px ${({theme}) => theme.COLORS.primary};
  }
`;

const ItemLink = styled.a`
  text-decoration: none;
`


export default function ListBooks({books}) {
  return (
    <>
    <ItemLink href={books.url} target="_blank">
      <ItemConteiner>
        <Thumbnaill src={books.img} />
        <Title>{books.title}</Title>
        <Price>R${books.price}</Price>
        <Button>Comprar</Button>
      </ItemConteiner>
      </ItemLink>
    </>
  )
}
