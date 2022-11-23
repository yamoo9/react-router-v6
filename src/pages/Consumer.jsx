import { useParams } from 'react-router-dom';
import { useConsumer } from 'hooks/useConsumer';

export default function Consumer() {
  const { id } = useParams();
  const { response: consumer, loading } = useConsumer(id);

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (!consumer) {
    return <div role="alert">고객이 조회되지 않습니다!</div>;
  }

  return (
    <div className="consumer">
      <h3>고객번호 : {consumer.id}</h3>
      <figure>
        <img src={consumer.photo} alt="" height={300} />
        <figcaption>
          <p>
            <span>{consumer.name}</span> | <span>{consumer.age}세</span>
          </p>
          <p>{consumer.bio}</p>
        </figcaption>
      </figure>
    </div>
  );
}
