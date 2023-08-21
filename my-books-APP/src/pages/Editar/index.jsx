import {useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'

import api from '../../services/api';

import ConteinerForm from "../../components/ConteinerForm";
import Input from '../../components/Input';
import Button from '../../components/ButtonSubmit';

import {FaArrowLeft} from 'react-icons/fa'

function Editar() {
    const [values, setValues] = useState({})
    const navigate = useNavigate()

    const {id} = useParams()

    const getDataBook = async() =>{
        let url = `/books/${id}`
        await api.get(url)
            .then(response => setValues(response.data))
            .catch(err => console.log(err))
    }

    useEffect(() =>{
        getDataBook()
    },[id])

    const onSubmit = async(e) =>{
        e.preventDefault()
        const url = `/books/${id}`
        await api.put(url,values )

        navigate('/administrar')
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }
    

    return ( 
        <ConteinerForm>
            <button onClick={() => {
                navigate('/administrar')
            }} className='back-to-books'>
                <FaArrowLeft />
            </button>

            <h1>Editar Livro</h1>

            <form onSubmit={onSubmit}>

                <Input
                    txt='Título'
                    type='text'
                    name='title'
                    placeholder="Digite um nome para seu livro"
                    value={values.title}
                    onChange={onChange}
                />

                <Input
                    txt='Imagem'
                    type='text'
                    name='img'
                    placeholder="insira a URL da imagem"
                    value={values.img}
                    onChange={onChange}
                />

                <Input
                    txt='URL'
                    type='text'
                    name='url'
                    placeholder="insira a URL de compra"
                    value={values.url}
                    onChange={onChange}
                />

                <Input
                    txt='Preço'
                    type='text'
                    name='price'
                    placeholder="Digite o preço do link"
                    value={values.price}
                    onChange={onChange}
                />

                <Button txt='Salvar Alterações' />


            </form>
        </ConteinerForm>
     );
}

export default Editar;