import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
      <div>
          <h1>Login Page</h1>
          <Link to="http://localhost:8080/oauth2/authorization/google">Login with Google</Link>
      </div>
  );
}