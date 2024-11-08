import React, { useState } from 'react';
import './Dashboard.css'; 
import { Outlet, useNavigate } from "react-router-dom";

function ExamCategories() {
  const navigate = useNavigate()
  return (
    <div className="ongoing-events">
      <h1>Ongoing Events</h1>
      <table>
        <tr><td><div className="categoryO">
          <h2>Code Connosiour</h2>
          </div>
        </td>
        <td><div className="categoryO">
          <h2>Stage Craft</h2>
        </div></td>
        <td><div className="categoryO">
          <h2>Battle O Drome</h2>
        </div></td></tr>
        </table>
        <div className='upcoming-events'>
        <h1>Upcoming Events</h1>
        <table>
        <tr><td><div className="categoryE">
          <h2>Vimarsh</h2>
        </div></td>
        <td><div className="categoryE">
          <h2>Freshers</h2>
        </div></td></tr>

        <button onClick={()=>navigate('/profile')}  style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            profile
          </button>

        </table>
      </div>
    </div>
  );
}

export default ExamCategories;
