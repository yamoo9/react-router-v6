export default function Consumer() {
  const loading = true;
  const consumer = {};

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!consumer) {
    return <div role="alert">고객이 조회되지 않습니다!</div>;
  }

  return (
    <nav>
      <h3>고객번호 : {consumer.id}</h3>
      <figure>
        <img src={consumer.photo} alt="" height={300} />
        <figcaption>
          <span>{consumer.name}</span> | <span>{consumer.age}세</span>
        </figcaption>
      </figure>
    </nav>
  );
}
