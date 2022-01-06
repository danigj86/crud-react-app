import React from 'react'

export const ModalEdit = ({cambiaInput, formState, user, editaUser}) => {
    return (
        <>
             <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target= {"#number"+user.id}>
                Edita User
            </button>

            <div className="modal fade" id={"number"+user.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar Usuario </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label  className="form-label">Nombre</label>
                                <input type="text" name="nombre" className="form-control" placeholder = {`${user.nombre}`}
                                value={formState.nombre}
                                onChange={cambiaInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Apellido</label>
                                <input type="text" name="apellidos" className="form-control" placeholder={`${user.apellidos}`}
                                  value={formState.apellidos}
                                  onChange={cambiaInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label  className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" placeholder={`${user.email}`}
                                  value={formState.email}
                                  onChange={cambiaInput}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={()=>editaUser(user.id)}  data-bs-dismiss="modal">Guarda usuario</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
