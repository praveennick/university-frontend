import Swal from 'sweetalert2';

export default function(state=null,action){
    switch(action.type){
        case 'REGISTER':
            console.log("hello this is register",action);
            
            if(action.payload.data.result){
                console.log("reducer printed");
                Swal.fire(
                    // 'User Created Successfully!',
                    'Good job!',
                    'User Created Successfully!',
                    'success'
                  )
                return false;
            }
        case "LOGIN":
            console.log("hello this is login",action);
            if (action.payload.data.result) {
                return true;
            }else{
                alert("Incorrect password");    
                // localStorage.setItem("message",action.payload.data.message)
                return false;
            }
        case "DISPLAY_USER":
            console.log("display ac data",action.payload.data)
            return action.payload.data; 

        case "LOGOUT":
            console.log("User Logged Out!");
            return false;
        case "UPDATE":
            console.log("hello this is update",action);
            if(action.payload.data.result){
                
                console.log("reducer printed");
                alert("Updated Successfully!")
                this.props.history.push('/');
                return true;
            }
        default:
            console.log("Im in default");
            return false;
    }
}