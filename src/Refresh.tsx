import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Refresh() {
  
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const location = useLocation();


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if(accessToken) {
      fetch(`http://localhost:8080/token/refresh`, {
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
            return response.json();
        })
        .then((data) => {
            localStorage.removeItem("accessToken");
            localStorage.setItem("accessToken", data.accessToken);
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
        <h1>Refresh</h1>
        <p>{loading ? "now loading..." : <Link to="/">Refresh Successed!! go to main</Link>}</p>
    </div>
  )
}
