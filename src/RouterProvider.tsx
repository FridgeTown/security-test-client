import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Signup from './Register';
import Failed from './Failed';
import Logout from './Logout';
import Refresh from './Refresh';


export default function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/refresh" element={<Refresh />} />
      </Routes>
    </BrowserRouter>
  )
}
