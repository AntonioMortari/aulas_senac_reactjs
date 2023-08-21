import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListaBooks from '../pages/ListaBooks'
import Cadastrar from '../pages/Cadastrar'
import Administrar from '../pages/Administrar';
import Editar from '../pages/Editar';
import NotFound from '../pages/NotFound'

const Root = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <ListaBooks />} />

                <Route path='/cadastrar' element={ <Cadastrar/>} />

                <Route path='/administrar' element={<Administrar />} />
                <Route path='/editar/:id' element={<Editar />} />

                <Route path='*' element={ <NotFound />} />
            </Routes>
        </Router>

    );
}

export default Root;