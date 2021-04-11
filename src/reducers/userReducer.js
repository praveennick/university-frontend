export default function(state=null,action){
    switch(action.type){
        case "LOGIN":
            console.log("hello this is login");
            return true;
        case "LOGOUT":
            console.log("User Logged Out!");
            return false;
        default:
            console.log("Im in default");
            return false;
    }
}