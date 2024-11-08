import React, { useState } from 'react';
import './Dashboard.css'; 
import { Outlet, useNavigate, Link } from "react-router-dom";

function ExamCategories() {
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
        </table>
      </div>
    </div>
  );
}

export default ExamCategories;
