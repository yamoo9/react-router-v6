export default function Consumer() {
  const consumer = {
    id: '',
    name: '',
    age: 0,
    photo: '',
  };

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
