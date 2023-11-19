import axios from 'axios';
import './App.css';
import Cookies from 'js-cookie'

function App() {
  async function login() {
    const response = await axios.post("http://localhost:400/login");
    console.log(response);
  } 
  async function logout() {
    const response = await axios.post("http://localhost:400/logout");
    console.log(response);
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
