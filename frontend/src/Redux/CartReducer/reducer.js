import * as types from "./actionTypes"

const intialState={
    cartProduct:{}
    
}

const reducer=(state=intialState,action)=>{
    switch(action.type){
        
        case types.ALL_PRODUCTS:
            return{
                ...state,
                cartProduct:action.payload
                
            }
        case types.REMOVE_DATA_FROM_CART:
            return{
                ...state
            }
        case types.UPDATE_CART_PRICE:
            return{
                ...state
            }
        case types.REMOVE_ALL_FROM_CART:
            return{
                ...state
            }
        default:
            return state;
    }

}

export {reducer}