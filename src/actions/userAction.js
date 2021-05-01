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
export function registerNewUser(user) {
    alert("Im in register action");
    console.log("user", user);
    var promise = axios.post("http://localhost:9545/register", user);
    console.log("register-promise",promise)
    return {
      type: "REGISTER",
      payload: promise,
    };
  }
export function updateUser(user) {
    alert("Im in update action");
    
    console.log("user", user);
    var username=sessionStorage.getItem("name");
      console.log("here is ths pid",username)
    var promise = axios.put("http://localhost:9545/updateUser/"+username, user);
    console.log("update-promise",promise);
    if(user.s_name){
        console.log("printed");
        sessionStorage.setItem("name",user.s_name)
    }
    return {
      type: "UPDATE",
      payload: promise,
    };
  }

export function displayUser(sid){
    console.log("display action called")
    // var sid=JSON.parse(localStorage.getItem("id"))
    var promise = axios.get("http://localhost:9545/getUserById/"+sid);
    console.log("promise",promise);
    return{
        type:"DISPLAY_USER",
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