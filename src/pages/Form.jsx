import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';

const fakeSubmit = () => {
  return new Promise((res) => {
    setTimeout(() => res(), 500);
  });
};

export default function Form() {
  const nameId = useId();
  const emailId = useId();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [readyToSend, setReadyToSend] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setEmail(value);
    if (name.trim().length !== 0 && email.trim().length > 1) {
      setReadyToSend(true);
    } else {
      setReadyToSend(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fakeSubmit(name, email);
    navigate('/submitted');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor={nameId}>이름</label>
      <input
        type="text"
        id={nameId}
        name="name"
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={emailId}>이메일</label>
      <input
        type="email"
        id={emailId}
        value={email}
        onChange={handleChange}
        name="email"
      />

      <button type="submit" disabled={!readyToSend}>
        전송
      </button>
    </form>
  );
}
