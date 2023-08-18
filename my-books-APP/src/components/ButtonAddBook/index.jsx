import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Abbr = styled.abbr`
    display: block;
    text-decoration: none;
    color: #f6f6f6;
    margin-bottom: 10px;
    > .button-plus{
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
`

function ButtonAddBook({children}) {
    const navigate = useNavigate()
    return (
        <Abbr title="Cadastrar novo livro">
            <button className='button-plus' onClick={() => navigate('/cadastrar')}>
                {children}
            </button>
        </Abbr>
    );
}

export default ButtonAddBook;