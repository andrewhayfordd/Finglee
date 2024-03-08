import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    let local = localStorage;
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const input_username=(event)=>{
        setUsername(event.target.value);
    }
    const input_password=(event)=>{
        setPassword(event.target.value);
    }

    React.useEffect(()=>{
        if(local.getItem("user_info")) navigate('/')
    }, [])

    const submit_info=(event)=>{
        event.preventDefault();
        let data ={
            username: username,
            password: password
        }
        local.setItem("user_info", JSON.stringify(data));
        setUsername("");
        setPassword("");

        let R_data ={
            username: "user",
            password: "1234"
        }
        local.setItem("R_user_info", JSON.stringify(R_data));

        if(local.getItem("user_info") === local.getItem("R_user_info")){
            console.log("Access Granted");
             navigate('/');
        }
        else{
            console.log("Access Denied");
        }
        
    }
    
   


    return(
        <div className="Login" id="login">

            <div className="container">
                <div className="login_side">
                    <div className="side">
                    <div className="head" id="head"><i className="fas fa-graduation-cap"></i> Finglee</div>

                    <div className="login">
                        <form action="" onSubmit={submit_info} >
                            <input type="text" placeholder="Username" onChange={input_username} value={username} required/><br />
                            <input type="password" placeholder="Password" onChange={input_password} value={password} required/><br/>
                            <button>Login</button>
                        </form>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
        
    );
}
export default Login;