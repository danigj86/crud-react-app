import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddUser } from './components/AddUser';
import { UserList } from './components/UserList';

import { ModalWindow } from './components/ModalWindow';
import { useEffect, useReducer } from 'react';
import { useForm } from './hooks/useForm';
import { userReducer } from './reducers/useReducer';

const init = () => {

  //inicia con la carga de los toDos; si no existen, se carga un array vacio
  return JSON.parse(localStorage.getItem('usuarios')) || [];
}


function App() {

  /*   const dataUsers = [
      { id: "jkwjk", nombre: "Alfredo", apellidos: "Martinez Rosa", email: "ejemplo1@ejemplo.com" },
      { id: "jkwew", nombre: "Maria", apellidos: "Julian Matias", email: "ejemplo2@ejemplo.com" },
      { id: "kmwnw", nombre: "Paco", apellidos: "Rolando Checa", email: "ejemplo3@ejemplo.com" }
    ];
   */
  const [users, dispatch] = useReducer(userReducer, [], init)

  console.log(users)

  const [formState, cambiaInput, reset] = useForm({
    nombre: '',
    apellidos: '',
    email: ''
  })

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(users))
  }, [users])

  /*   const [ formState, cambiaInput, reset] = useForm({
         name:'', 
         apellido:'', 
         email:''
    }) */


  const agregaUser = () => {
    console.log('agregado')

    const newUser = {
      id: new Date().getTime(),
      nombre: formState.nombre,
      apellidos: formState.apellidos,
      email: formState.email
    }

    const action = {
      type: 'nuevo',
      payload: newUser
    }
    if (formState.nombre === '') {
      alert('Debes añadir un nombre');
      return false;
    }
    if (formState.apellido === '') {
      alert('Debes añadir apellidos')
      return false;
    }

    dispatch(action);
    reset();
  }

  const borraUser = (id) => {
    console.log(`Borrado el id ${id}`)

    const action = {
      type: `borrar`,
      payload: id
    }

    dispatch(action);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <ModalWindow
            cambiaInput={cambiaInput}
            formState={formState}
            agregaUser={agregaUser}
          />
        </div>
        <div className="col-md-8">
          <UserList
          users={users} 
          borraUser={borraUser}
          />
        </div>
      </div>
      <div className="row col-md-12 ">
        <div className="modal-container">


        </div>
      </div>
    </div>
  );
}

export default App;
