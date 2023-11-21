import axios from 'axios';
import './App.css';
import Cookies from 'js-cookie'

function App() {
  async function login() {
    try{
      const data = "My data"
      const response = await axios.post("http://localhost:4000/login", data, {withCredentials: true});
      console.log(response);
    }
    catch(err){
      console.log("Error: " + err.message);
    }
    
  } 
  async function logout() {
    try{
      const response = await axios.post("http://localhost:4000/logout",null,  {withCredentials: true});
    console.log(response);
    }
    catch(er){
      console.log(er.message)
    }
    
  }
  function geetCookies(){
    console.log(Cookies.get('phone'))
  } 

  return (
    <>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={geetCookies}>get</button>
    </>
  )
}

export default App
