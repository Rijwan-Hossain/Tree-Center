


const cartReducer = (state = [], action) => { 
    if(action.type === 'ADD_TO_CART') { 
        let cart = state.concat(action.payload) 
        return cart 
    } 
    else if(action.type === 'REMOVE_FROM_CART') { 
        let cart = state.filter(tree => { 
            if(tree.id !== action.payload) 
                return tree 
        }) 
        return cart 
    } 
    else if(action.type === 'INCREASE_PRODUCT') { 

    } 
    return state 
} 

export default cartReducer 
