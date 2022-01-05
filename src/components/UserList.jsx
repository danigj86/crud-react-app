import React from 'react'
import { ModalWindow } from './ModalWindow';

export const UserList = ({ users, borraUser }) => {

    const usuarios = users;
    console.log(usuarios);
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
                            <td><button className="btn btn-warning">Editar</button> <button className="btn btn-danger" onClick={()=>borraUser(user.id)}>Borrar</button></td>
                        </tr>
                        })
                    }
                  
                </tbody>
            </table>
        </div>
    )
}
