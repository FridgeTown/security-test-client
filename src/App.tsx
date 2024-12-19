import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getQueryParams } from './utils';

export default function App() {
  const [accessToken, setAccessToken] = useState('');
  const location = useLocation();


  useEffect(() => {
      const { accessToken } = getQueryParams(location.search);

      if(accessToken) {
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
      }

  }, [location.search]);


  return (
      <div>
          <h1>Welcome to the Main Page</h1>
          <Link to="/login">Login with OAuth2</Link>
          <br />
          {accessToken ? <Link to="/logout">Logout</Link> : null}
      </div>
  );
}
