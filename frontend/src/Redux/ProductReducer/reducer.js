import * as types from "./actionTypes"

const intialState={
    product:[],
    isLoading:false,
    isError:false
}

const reducer=(state=intialState,action)=>{
    switch(action.type){
        case types.GET_PRODUCT_REQUEST:
            return{
                ...state,
                isLoading:true
            }
        case types.GET_PRODUCT_SUCCESS:
            return{
                ...state,
                product:action.payload,
                isLoading:false
            }
        case types.GET_PRODUCT_ERROR:
            return{
                ...state,
                isError:true
            }
        default:
            return state;
    }

}

export {reducer}