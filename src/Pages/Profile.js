import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";

// Profile component
function Profile() {  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('vaibhavgt0');
  const [phoneNumber, setPhoneNumber] = useState('+91 9411566926');
  const [email, setEmail] = useState('vaibhavnargwani28@gmail.com');
  const [name] = useState("Vaibhav Nargwani");
  const [idNumber] = useState("62287");
  const [branch] = useState("Computer Engineering");
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can handle saving the updated profile, e.g., send data to an API
    console.log('Profile updated:', { username, phoneNumber, email });
  };

  return <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Personal Info</h2>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ marginLeft: '10px', width: '100%' }}
              />
            </label>
          </div>
          <p><strong>Name: </strong><br></br>{name}</p>
          <p><strong>Id Number: </strong><br></br>{idNumber}</p>
              <p><strong>Branch:  </strong><br></br>{branch}</p>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Phone Number:<br></br>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                style={{ marginLeft: '10px', width: '100%' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              Email:<br></br>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ marginLeft: '10px', width: '100%' }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          <p><strong>Username:</strong><br></br> {username}</p>
          <p><strong>Name: </strong><br></br>{name}</p>
          <p><strong>Id Number: </strong><br></br>{idNumber}</p>
              <p><strong>Branch: </strong><br></br>{branch}</p>
          <p><strong>Phone Number:<br></br></strong> {phoneNumber}</p>
          <p><strong>Email:</strong> <br></br>{email}</p>
          <button onClick={handleEditToggle} style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Edit Profile
          </button>

          <button onClick={() => navigate('/Dashboard')}  style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Back
          </button>

          <br></br>
          
          <button onClick={() => navigate('/')}  style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Logout          
          </button>

          


        </div>
      )}
    </div>
};

export default Profile;