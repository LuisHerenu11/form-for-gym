import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Formulario from './components/Formulario';
import { useState } from 'react';
import Socio from './components/Socio';

function App() {
  
  // Generamos un state vacío con los socios del gym
  const [asociados,editarAsociados] = useState([]);

  // Creamos una función para recibir un socio nuevo y agregarlo
  // a la lista de asociados
  const agregarSocio = (socio) => {
    editarAsociados([
      ...asociados,
      socio
    ])
  };

  // Función para borrar el socio
  // No olvidar el ID como parámetro
  const borrarSocio = (id) => {
    const nuevosSocios = asociados.filter(socio => socio.id !== id);
    editarAsociados(nuevosSocios);
  };

  return (
    <div style={{backgroundColor:"grey",height:"100vw"}}>
      <Container>
        <Row>
          <Col><h1> Gimnasio UnaHur</h1></Col>
        </Row>
        <Row>
          <Col className='col-4'>
            <Formulario agregarSocio={agregarSocio}/>
          </Col>
          <Col className='gap-auto col-8'>
            <h3>Lista de asociados</h3>
            {
              asociados.map( socio => 
                <Socio 
                  socio={socio} 
                  key={socio.id}
                  borrarSocio={borrarSocio}
                />
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
