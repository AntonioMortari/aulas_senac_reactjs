import styled from 'styled-components'

const Label = styled.label`
    display: flex;
            flex-direction:column;
            margin-bottom: 10px;

            >input{
                padding: 8px;
                border-radius: 5px;
                border: none;
                background-color: ${({ theme }) => theme.COLORS.gray};

                &:focus{
                    outline: 2px solid ${({ theme }) => theme.COLORS.primary};
                }

            }
`

export default Label