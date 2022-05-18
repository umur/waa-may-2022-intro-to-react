import { useState } from "react"

const Login = () => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="container">
          <div>
            <h2> Login </h2>
          </div>
          <form className="login-form">
            <div className="">
              <label for="inputUserName" className="form-label">User Name: </label>
              <input type="text" value={userName} className="form-control" id="inputUserName" autoComplete='off' onChange={e => setUserName(e.target.value)} />
            </div>
            <div className="">
              <label for="inputPassword" className="form-label">Password: </label>
              <input type="password" value={password} className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
              <input type="button" value="Login" className="form-control btn-primary" />
            </div>
          </form>
        </div>
      )
}

export default Login;