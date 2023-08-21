import styled from 'styled-components'

const Button = styled.button`
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
`

export default Button