import * as types from "./actionTypes"

const getProductRequest=()=>{
    return{
        type:types.GET_PRODUCT_REQUEST
    }
}

const getProductSuccess=(payload)=>{
    return{
        type:types.GET_PRODUCT_SUCCESS,
        payload
    }

}

const getProductError=()=>{
    return{
        type:types.GET_PRODUCT_ERROR
    }
}

export{getProductRequest,getProductSuccess,getProductError}