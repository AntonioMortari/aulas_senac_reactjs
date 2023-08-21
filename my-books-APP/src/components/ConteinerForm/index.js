import styled from 'styled-components'

const ConteinerForm = styled.div`
    box-shadow: 0px 0px 10px #26262634;
    padding: 20px;
    border-radius: 5px;

    width: 350px;

    >.back-to-books{
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.primary};
        background-color: transparent;
        border: none;
        font-size: 1rem;
    }

    >h1{
        color: ${({ theme }) => theme.COLORS.primary};
        font-weight: normal;
        font-size: 2.8rem;
    }

    >form{
        display: flex;
        flex-direction: column;
    }
`

export default ConteinerForm