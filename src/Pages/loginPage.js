import React, { useEffect, useState } from "react";
import '..\\src\\App.css';
import logo from '..\\public\\logo.png'
import { Outlet, useNavigate } from "react-router-dom";
function LoginPage() {
    const [idNumber, setIdNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform login logic here, such as sending a request to an API
      console.log('ID Number:', idNumber);
      console.log('Password:', password);
    };
    
  
    return (
      <>
      <div className="login-container" style={{flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px'
       }}>
        <img src={logo} width="100"/>
        <h1>Student Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idNumber"
                style={{lineSpacing:'208'}}>Id Number: </label><br></br>
            <input
              type="text"
              id="idNumber"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <br></br><label htmlFor="password"style={{border:10}}>Password: </label><br></br>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <br></br>
          <button type="submit" onClick={() => {
            if (idNumber == 62287 && password == "TagoreBhawan") {
              navigate("/dashboard");
            } else {
              alert("Wrong Id or Password");
            }
          }} style={{flex:1, padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px'}}>
            Sign In
          </button>
          
        </form>
      </div>
      <Outlet />
      </>
    );
  }
  
  
  export default LoginPage; 