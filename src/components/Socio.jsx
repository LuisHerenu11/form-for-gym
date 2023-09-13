import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap';

const Socio = ({socio, borrarSocio}) => {
    return(
        <Fragment>
            <span className='badge bg-success'>
                <p>Socio: {socio.id}</p>
                <p>Nombre: {socio.nombre}</p>
                <p>DNI: {socio.dni}</p>
                <br></br>
                <Button variant='danger' onClick={() => borrarSocio(socio.id)}> Borrar </Button>
            </span>
        </Fragment>
    );
}

export default Socio;