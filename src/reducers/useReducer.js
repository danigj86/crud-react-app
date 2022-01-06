
export const userReducer = (state = [] , action)=>{
    switch (action.type) {

        case 'añadir':
            console.log('se añadio un user');
           return [...state, action.payload];

        case 'borrar':
            console.log('borrado completado');
            return state.filter( user => user.id !== action.payload)   
    
        case 'editar':
            console.log('editar en reducer');
        
           return state.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        nombre: action.payload.nombre,
                        apellidos: action.payload.apellidos,
                        email: action.payload.email,
                    }
                } else {
                    return user;
                }
            }) 

        default:
            return state;
    }
}