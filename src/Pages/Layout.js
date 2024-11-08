import React, { useEffect, useState } from "react";
import '..\\src\\App.css';
import { Outlet, useNavigate } from "react-router-dom";
function Layout() {
    return (
      <>
      <Outlet />
      </>
    );
  }
  

  export default Layout; 