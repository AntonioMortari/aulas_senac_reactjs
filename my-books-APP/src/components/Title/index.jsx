import styled from 'styled-components'

const Title = styled.h1`
    font-weight: normal;
    color: #262626;
    text-align: center;

    >span{
        color: ${({theme}) => theme.COLORS.primary};
    }
`


function ComponentTitle({content,span}) {
    return ( 
        <Title>{content} <span>{span}</span></Title>
     );
}

export default ComponentTitle;