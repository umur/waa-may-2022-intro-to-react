import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  return (
    <div className="container w-25">
      <div>
        <h3>
          Signup
        </h3>
      </div>
      <form className="">
        <div className="">
          <label for="inputEmail4" className="form-label">Email</label>
          <input type="email" value={email} className="form-control" id="inputEmail4" autoComplete='off' onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="">
          <label for="firstName" className="form-label">First Name</label>
          <input type="text" value={firstName} className="form-control" id="firstName" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div className="">
          <label for="lastName" className="form-label">Last Name</label>
          <input type="text" value={lastName} className="form-control" id="lastName" onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="">
          <label for="inputPassword4" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="inputPassword4" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="button" value="Signup" className="form-control mt-3 btn-success" />
        </div>
      </form>
    </div>
  )
}

export default Signup