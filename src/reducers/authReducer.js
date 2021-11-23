import {LOGIN,LOGOUT,REGISTER} from'../constants/user'

const init=false;

const authReducer=(state=init,action)=>{
    switch(action.type){
        case LOGIN:
          return true;
        case LOGOUT:
          return false;
        case REGISTER:
            return true;
        default:
            return state;          

    }
}
export default authReducer;