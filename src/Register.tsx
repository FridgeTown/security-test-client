import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getQueryParams } from './utils';

export default function Register() {
    const [user, setUser] = useState<string>('');
    const [loading, setLoading] = useState(true); // 로딩 상태 추가
    const location = useLocation();


    useEffect(() => {
        const { email, provider } = getQueryParams(location.search);

        if (!email || !provider) {
            console.error('Missing email or provider in query string');
            setLoading(false);
            return;
        }

        // 백엔드 호출로 사용자 정보 확인 및 상태 업데이트
        fetch(`http://localhost:8080/api/auth/register`, {
          method: 'POST', // POST 요청
          credentials: 'include', // 쿠키 포함
          headers: {
              'Content-Type': 'application/json', // JSON 형식
          },
          body: JSON.stringify({ email, provider }), // 요청 본문에 JSON 데이터
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user information');
                }
                return response.json();
            })
            .then((data) => {
                setUser(email);
                console.log(data)
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [location.search]);

    // 로딩 상태 또는 오류 처리
    if (loading) {
        return <p>Loading user information...</p>;
    }

    if (!user) {
        return (
            <div>
                <h1>Signup Error</h1>
                <p>Failed to load user information. Please try again.</p>
            </div>
        );
    }

    // 성공적으로 사용자 정보를 불러온 경우
    return (
        <div>
            <h1>Signup Page</h1>
            <p>Welcome, {user}!</p>
            <Link to={"/"}>{`<-`}to main</Link>
        </div>
    );
}
