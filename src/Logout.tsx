import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Logout() {
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const location = useLocation();


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken) {
      fetch(`http://localhost:8080/token/logout`, {
        method: 'POST', // POST 요청
        credentials: 'include', // 쿠키 포함
        headers: {
            'Content-Type': 'application/json', // JSON 형식
            'Authorization': `${accessToken}`
        },
      })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch user information');
            }
            return response;
        })
        .then((data) => {
            localStorage.removeItem("accessToken");
            console.log(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });

    }


  }, [location.search]);

  return (
    <div>
        <h1>Logout</h1>
        <p>{loading ? "now loading..." : <Link to="/">Logout Successed!! go to main</Link>}</p>
    </div>
  )
}
