import styled from 'styled-components'

const Input = styled.input`
    display: block;
    padding: 5px;

    border: none;
    border-bottom: 2px solid ${({theme}) => theme.COLORS.gray};

    background-color: transparent;
    outline: none;
    margin: 20px 0;
    transition: all.2s;

    &:focus{
        border-bottom: 2px solid ${({theme}) => theme.COLORS.primary};
    }
`

function ComponentInput({type, placeholder, value, onChange}) {
    return ( 
        <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></Input>
     );
}

export default ComponentInput;