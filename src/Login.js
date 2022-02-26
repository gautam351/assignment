import axios from 'axios';
import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
  const [islogin, setislogin] = useState("*please login ");
  let navigate=useNavigate();
 const loginSubmit= async(e)=>{
e.preventDefault();
const myform=new FormData();
const datat={
    "custId":email,
    "pwd":password
};
const {data}=await  axios.post("https://nusstore.glitch.me/login",datat);
console.log(data);
if(data){
 setemail("");
 setpassword("");
navigate("/items"); 
}
else {setislogin("wrong credentials");}
 }

  return (
   <>
  
          {/* login form */}
          <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
   
          <form className="loginForm" 
          onSubmit={loginSubmit}
          >
         
               <legend>Login Form</legend>
               <div className="loginEmail">
              {/* <EmailIcon /> */}
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=> setemail(e.target.value) }
              />
            </div>

            <div className="loginPassword">
              {/* <LockIcon /> */}
              <input
                type="password"
                required
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

           
            <input type="submit" value="Login" className="loginBtn" />
            <input className="label" type="text" value={islogin} readOnly />
          </form>

          </div>
          </div>


   </>
  )
}

export default Login