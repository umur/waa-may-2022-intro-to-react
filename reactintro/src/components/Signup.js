import { useState } from "react";

const Signup = () => {    
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="container">
      <div>
        <h2> Signup </h2>
      </div>
      <hr></hr>
      <form className="signup-form">
        <div className="">
          <label for="inputUserName" className="form-label">User Name</label>
          <input type="text" value={userName} className="form-control" id="inputUserName" autoComplete='off' onChange={e => setUserName(e.target.value)} />
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
          <label for="inputPassword" className="form-label">Password</label>
          <input type="password" value={password} className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <input type="button" value="Signup" className="form-control btn-success" />
        </div>
      </form>
    </div>
    );
}

export default Signup;