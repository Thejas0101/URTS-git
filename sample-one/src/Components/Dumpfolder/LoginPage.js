import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Axios from 'axios'

export const LoginPage = () => {

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const registerUser = () => {
        Axios.post('http://localhost:3001/register', {
            user: user,
            pwd: pwd
        }).then(() => {
            console.log('Successfully added User.')
            alert("User Added Successfully!")
        });
    };

    const userLogin = () => {
        Axios.post('http://localhost:3001/login', {
            user: username,
            pwd: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
              } else {
                setLoginStatus(response.data[0].username);
                console.log(loginStatus);
              }
        });
    };

    useEffect(() => {
        Axios.get('http://localhost:3001/login').then((response) => {
            console.log(response);
            if (response.data.loggedIn == true){
                setLoginStatus(response.data.user[0].Username);
                console.log(loginStatus);
            }
        });
    }, []);

    const display = () => {
        console.log(user);
        console.log(pwd);
    }

    return(
        <div>
            <div>
                <h1>Registration</h1>
                <label>Username</label>
                <input onChange={(e)=>{setUser(e.target.value)}}></input>
                <label>Password</label>
                <input onChange={(e)=>{setPwd(e.target.value)}}></input>
                <Button onClick={registerUser}> Register </Button>
            </div>
            <div>
                <h1>Login</h1>
                <label>Username</label>
                <input onChange={(e)=>{setUsername(e.target.value)}}></input>
                <label>Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}}></input>
                <Button onClick={userLogin}> Login </Button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default LoginPage