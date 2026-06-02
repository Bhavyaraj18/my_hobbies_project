import React,{useRef} from 'react'

const Register = (props) => {
    const email = useRef('');
    const password = useRef('');
    const registeruser = (e)=>{
        e.preventDefault();
        let mail = email.current.value;
        let pass = password.current.value;
        fetch("http://localhost:5000/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email: mail,
    password: pass,
    role: "admin"
  })
}).then(res=>{ email.current.value = '';
  password.current.value = '';
alert("successfully registered, you may now login")})
}
function msg(){
  email.current.value = '';
  password.current.value = '';
}

  return (
    <div>
        <form>
      Email: <input ref={email} type="text" /><br/>
      Password: <input ref={password} type="password"/><br/>
      <button type="submit" onClick={registeruser}>Register</button>
      </form>
      Already have an account? <span style={{cursor:'hand'}} onClick={()=>{props.register(false)}}>Login</span>
    </div>
  )
}

export default Register