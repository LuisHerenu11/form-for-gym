import React, { Fragment } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/* w-48 h-48 */
const Socio = ({socio, borrarSocio}) => {
    return(
        <Fragment>
            <span className='badge bg-success ms-1 me-1 mt-1 mb-1' style={{width:"32%"}}>
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