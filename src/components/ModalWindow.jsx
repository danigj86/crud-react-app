import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export const ModalWindow = ({cambiaInput, formState, agregaUser}) => {
   

    return (
        <>
        <h2>Agrega nuevo usuario</h2>
        <hr />

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agrega User
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label  className="form-label">Nombre</label>
                                <input type="text" name="nombre" className="form-control" placeholder="Nombre..."
                                value={formState.nombre}
                                onChange={cambiaInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Apellido</label>
                                <input type="text" name="apellidos" className="form-control" placeholder="Apellido..."
                                  value={formState.apellidos}
                                  onChange={cambiaInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" placeholder="email@email.com..."
                                  value={formState.email}
                                  onChange={cambiaInput}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={agregaUser} data-bs-dismiss="modal">Guarda usuario</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

