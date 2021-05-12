import React,{useContext,useState}from 'react'
import { BookContext } from '../context/BookContext';

export default function Login() {
    const {dispatch}=useContext<any>(BookContext)
    const [Login, setLogin] = useState({email:'',password:''})

    const handleLogin=(e:any)=>{
        setLogin({...Login,[e.target.name]:e.target.value})
    }
    const loginUser=(e:any)=>{
        console.log(Login);
         dispatch({type:'LOGIN_USER',user:Login ,isLogedIn:true})
        e.preventDefault();
        
    }
    
    return (
        <div>
                  <div className="AddBookForm">      
                    <form onSubmit={loginUser}>
                        <label htmlFor="">
                            Enter Username
                        </label><br/>
                        <input type="email" name="email"  onChange={handleLogin}/><br/>
                        <label htmlFor="">
                            Enter Password
                        </label><br/>
                        <input type="password" name="pass" onChange={handleLogin}/><br/>
                        <br />
                        <button>Login</button>
                        </form>                      
                        
                    </div>  
        </div>
    )
}
