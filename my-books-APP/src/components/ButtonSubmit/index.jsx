import Conteiner from './styles.js'

function Button({txt, onClick}) {
    return ( 
        <Conteiner onClick={onClick}>
            {txt}
        </Conteiner>
     );
}

export default Button;