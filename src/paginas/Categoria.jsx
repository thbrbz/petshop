import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';
import SubCategoria from './SubCategoria';

const Categoria = () => {
    const { tipo } = useParams();
    const { url, path } = useRouteMatch();
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() =>{
        busca(`/categorias/${tipo}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [tipo]);

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {subcategorias.map((subcategoria) => (
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${tipo}`}  key={subcategoria}>
                        <Link to={`${url}/${subcategoria}`}>
                            {subcategoria}
                        </Link>
                    </li>
                ))}
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${tipo}`}/>
                </Route>
                <Route exact path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    );
}

export default Categoria;