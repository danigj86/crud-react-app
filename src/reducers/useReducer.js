
export const userReducer = (state = [] , action)=>{
    switch (action.type) {

        case 'nuevo':
            console.log('se añadio un user');
           return [...state, action.payload];

        case 'borrar':
            console.log('borrado completado');
            return state.filter( user => user.id !== action.payload)   
    
        default:
            break;
    }
}