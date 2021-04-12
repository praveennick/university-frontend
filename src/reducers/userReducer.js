export default function(state=null,action){
    switch(action.type){
        case "LOGIN":
            console.log("hello this is login",action);
            if (action.payload.data.result) {
                return true;
            }else{
                alert("Incorrect password");    
                localStorage.setItem("message",action.payload.data.message)
                return false;
                
            }
            
        case "LOGOUT":
            console.log("User Logged Out!");
            return false;
        default:
            console.log("Im in default");
            return false;
    }
}