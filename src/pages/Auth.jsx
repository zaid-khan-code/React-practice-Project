 import { useState } from 'react' 
import Login from '.././components/Login.jsx'
import SignUp from '.././components/SignUp.jsx'
 

const Auth = () => {
    const [isLoggin, setisLoggin] = useState(false);
  
  return (
    (isLoggin ? <Login Loggin={setisLoggin} /> : <SignUp Loggin={setisLoggin} />)
  )
};

export default Auth;
