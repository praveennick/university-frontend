import axios from 'axios';

export function loginUser(user){
    console.log("user",user);
    var promise = axios.post("http://localhost:9545/login",user)
    console.log("promise",promise)
    return{
        type:"LOGIN",
        payload:promise
    }
}

export function logoutUser(){
    console.log("user loggedout");
    return{
        type:"LOGOUT",
        payload:"hello"
    }
}