import Label from './styles'

function Input({txt, name, onChange, type, placeholder, value}) {
    return ( 
        <Label htmlFor={name}>
            {txt}
            <input 
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </Label>
     );
}

export default Input;