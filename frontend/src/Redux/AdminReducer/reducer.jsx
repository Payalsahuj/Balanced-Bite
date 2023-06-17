import { ERROR, GET_ALLPRODUCTDATA, GET_ALLUSERDATA, LOADING, POST_ADMINLOGIN_SUCCESS, POST_ADMINREGISTER_SUCCESS } from "./actionType"


const initialstate={
    isLoading: false,
    isError: false,
    userdata:[],
    product:[],
    Login:"",
  }

const reducer=(state=initialstate,action)=>{
   switch(action.type){
    case LOADING:{
        return {...state,isLoading:true}
    }
    case ERROR:{
        return {...state,isError:true,isLoading:false}
    }
    case POST_ADMINREGISTER_SUCCESS:{
        return {...state,isLoading:false}
    }
    case POST_ADMINLOGIN_SUCCESS:{
        return {...state,Login:action.payload,isLoading:false}
    }
    case GET_ALLUSERDATA:{
        return {...state,userdata:action.payload,isLoading:false}
    }
    case GET_ALLPRODUCTDATA:{
        return {...state,product:action.payload,isLoading:false}
    }
    default:{
        return {...state}
    }
   }
}

export {reducer}