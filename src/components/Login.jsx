import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="container w-25">
      <div>
        <h3>
          Login
        </h3>
      </div>
      <form className="">
        <div className="">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="email" value={email} className="form-control" id="inputEmail4" autoComplete='off' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="">
          <label for="inputPassword4" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="inputPassword4" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="button" value="Login" className="form-control mt-3 btn-success" />
        </div>
      </form>
    </div>
  )
}

export default Login