// 쿼리 스트링 파싱 함수
export const getQueryParams = (search: string) => {
    return Object.fromEntries(new URLSearchParams(search).entries());
};