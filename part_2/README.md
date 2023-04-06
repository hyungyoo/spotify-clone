https://swr.vercel.app/ko/docs/getting-started#%EC%9E%AC%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%98%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0
전역으로 데이터관리: redux, redux-thunk, redux-saga, useSWR

이때, useSWR쓰기로: 간단하고, 코드가 직관적이다.
또한 요청이 한번만 가기때문에 컴포넌트가 중첩되어도 사용가능

https://swr.vercel.app/ko/docs/revalidation
새롭게 디듀핑안하기위해서, useSWRImmutable을 사용함
useSWR(key, fetcher, {
revalidateIfStale: false,
revalidateOnFocus: false,
revalidateOnReconnect: false
})
// 다음과 동일
useSWRImmutable(key, fetcher)

axios 인터셉텉로 접근토큰 확인 및 쿠키에저장

실행빙법: npm run start

env 설정방법
