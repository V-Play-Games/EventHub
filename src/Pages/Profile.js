import React, { useState } from 'react';

// Profile component
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState('safedkabootar');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('safedkabootar@gmail.com');
  const[name] = useState("Safed Kabootar");
    const[idNumber] = useState("00000");
    const[branch] = useState("Computer Engineering");

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can handle saving the updated profile, e.g., send data to an API
    console.log('Profile updated:', { username, phoneNumber, email });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
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
        </div>
      )}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default App;