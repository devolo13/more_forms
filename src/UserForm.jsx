import {useState} from 'react';

const UserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if(e.target.value.length == 0){
        setFirstNameError("");
    } else if (e.target.value.length < 2){
        setFirstNameError("First Name must be at least 2 characters");
    } else{
        setFirstNameError("");
    }
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if(e.target.value.length == 0){
        setLastNameError("");
    } else if (e.target.value.length < 2){
        setLastNameError("Last Name must be at least 2 characters");
    } else{
        setLastNameError("");
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length == 0){
        setEmailError("");
    } else if (e.target.value.length < 5){
        setEmailError("Email must be at least 5 characters");
    } else{
        setEmailError("");
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length == 0){
        setPasswordError("");
    } else if (e.target.value.length < 8){
        setPasswordError("Password must be at least 8 characters");
    } else{
        setPasswordError("");
    }
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length == 0){
      setConfirmPasswordError("");
    } else if (e.target.value != password){
        setConfirmPasswordError("Passwords must match");
    } else{
        setConfirmPasswordError("");
    }
  }

  return (
    <div className="App container justify-content-center my-5">
      <form onSubmit={UserForm.createUser} >
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="firstName" className='col-1 mx-2'>First Name</label>
          <input type="text" name="firstName" id="firstName" className='my-2 ms-1 form-control me-5' onChange={ (e) => handleFirstName(e) }/>
        </div>
        <p>{firstNameError}</p>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="lastName" className='col-1 mx-2'>Last Name</label>
          <input type="text" name="lastName" id="lastName" className='my-2 ms-1 form-control me-5' onChange={ (e) => handleLastName(e)}/>
        </div>
        <p>{lastNameError}</p>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="email" className='col-1 mx-2'>Email</label>
          <input type="text" name="email" id="email" className='my-2 ms-1 form-control me-5' onChange={(e)=> handleEmail(e)}/>
        </div>
        <p>{emailError}</p>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="password" className='col-1 mx-2'>Password</label>
          <input type="password" name="password" id="password" className='my-2 ms-1 form-control me-5' onChange={(e)=>handlePassword(e)}/>
        </div>
        <p>{passwordError}</p>
        <br />
        <div className="bg-secondary d-flex align-items-center rounded">
          <label htmlFor="confirmPassword" className='col-1 mx-2'>Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" className='my-2 ms-1 form-control me-5' onChange={ (e) => handleConfirmPassword(e)}/>
        </div>
        <p>{confirmPasswordError}</p>
      </form>
      <h5 className="text-center my-3">Your Form Data</h5>
      <div className="d-flex justify-content-center">
        <div className="col-2 mx-2">
          <p>First Name</p>
          <p>Last Name</p>
          <p>Email</p>
          <p>Password</p>
          <p>Confirm Password</p>
        </div>
        <div className="col-5 text-start mx-2">
          <p>{firstName}</p>
          <p>{lastName} </p>
          <p>{email} </p>
          <p>{password} </p>
          <p>{confirmPassword} </p>
        </div>
      </div>
    </div>
  );
}
export default UserForm;
