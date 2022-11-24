import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="notFound">
      <h2>잘못된 요청입니다.</h2>
      <p>
        <Link to="/">홈 페이지</Link>로 이동하시겠습니까?
      </p>
    </div>
  );
}
