import React, { Fragment, useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { v4 as uuid} from 'uuid';


const Formulario = ({agregarSocio}) => {
    
    //  Creo un socio vacío con un state.
    const [socio, editarSocio] = useState({
        nombre:" ",
        dni:" "
    })

    // Creamos un hook de estado para el error en el formulario
    const [error, setError] = useState(false);


    // Extraer los valores
    const {nombre, dni} = socio;

    // Recolectar lo que el usuario escribe en el formulario
    const handleChange = (element) => {
        console.log("Escribiendo en el teclado",element.target.name," ",element.target.value)
        editarSocio({
            ...socio, 
            [element.target.name]: element.target.value
        })
    };

    // Función que se ejecuta cuando enviamos el formulario
    const submitForm = (element) => {
        //console.log('Formulario enviado')
        element.preventDefault();

    // Validar el formulario
        if(nombre.trim() === '' || dni.trim() === ''){
            setError(true);
            return;
        }
        // Mensaje de error
        setError(false);
        // Identificación unica para socio
        socio.id = uuid();
        // Guardar el socio
        agregarSocio(socio);
        // Limpiar formulario
        editarSocio({
            nombre:" ",
            dni:" "
        })
    };
    
    return (
        <Fragment>
            <h3>
                Formulario de ingreso
            </h3>
            <Form onSubmit={submitForm}>
                <Form.Group>
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Completo" name='nombre' onChange={handleChange} value={nombre}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="Sin puntos ni espacios" name='dni' onChange={handleChange} value={dni}/>
                </Form.Group>
                <Button variant='success' type='submit'>
                    Ingresar Socio
                </Button>
            </Form>
            {
                error
                ? <h4>Completar los campos</h4>
                : null
            }
        </Fragment>
    );
}

export default Formulario;