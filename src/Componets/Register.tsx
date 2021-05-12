import React,{useState,useContext} from 'react'
import { BookContext } from '../context/BookContext';

export default function Register() {
    const {dispatch} = useContext<any>(BookContext)

    const [user, setUser] = useState({
        fname:'',
        lname:'',
        email:'',
        password:'',
        cpassword:''
    })


    const SubmitUserData=(e:any)=>{

        e.preventDefault();
        dispatch({type:'ADD_USER',userData:user})
        console.log(user);
        
    }
    
    const handleUserData=(e:any)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div>
            
            <div className="AddBookForm">      
                    <form onSubmit={SubmitUserData}>
                        <label htmlFor="">
                            Enter First Name
                        </label><br/>
                        <input type="text"  name="fname" onChange={handleUserData} value={user.fname}/><br/>
                        <label htmlFor="">
                            Enter Last Name
                        </label><br/>
                        <input type="text"  name="lname" onChange={handleUserData} value={user.lname}/><br/>
                        <label htmlFor="">
                            Enter Email
                        </label><br/>
                        <input type="email"  name="email" onChange={handleUserData} value={user.email}/><br/>
                        <label htmlFor="">
                            Enter Password
                        </label><br/>
                        <input type="password"  name="password" onChange={handleUserData} value={user.password}/><br/>
                        <label htmlFor="">
                            Comfirm Password
                        </label><br/>
                        <input type="password" name="cpassword" onChange={handleUserData} value={user.cpassword} /><br/>
                        <br/>
                        <button>Register</button>
                        
                        </form>                      
                        
                    </div>  
        </div>
    )
}
