import React from 'react'
import { ModalEdit } from './ModalEdit';

export const UserList = ({ users, cambiaInput, formState, borraUser, editaUser }) => {

    const usuarios = users;
    console.log(usuarios);

    const confirmar = (id)=>{
        const respuesta = window.confirm('Seguro que deseas borrar este usuario?');

        if (respuesta) {
            borraUser(id);
        }
    }

    return (
        <div>
            <h2>Lista usuario</h2>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((user, i) =>{
                            return   <tr key={user.id}>
                            <th >{i+1}</th>
                            <td>{user.nombre}</td>
                            <td>{user.apellidos}</td>
                            <td>{user.email}</td>
                            <td><ModalEdit
                            i={i}
                            user={user}
                            cambiaInput={cambiaInput}
                            formState={formState}
                            editaUser={editaUser}
                            />  
                             <button className="btn btn-danger" onClick={()=>confirmar(user.id)}>Borrar</button></td>
                        </tr>
                        })
                    }
                  
                </tbody>
            </table>
        </div>
    )
}
