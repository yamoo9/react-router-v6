import { useAuth } from 'contexts/auth';
import { useState, useId } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  const emailId = useId();
  const passwordId = useId();
  const navigate = useNavigate();
  const location = useLocation();
  const { logIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [readyToSend, setReadyToSend] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
    if (password.trim().length !== 0 && email.trim().length > 1) {
      setReadyToSend(true);
    } else {
      setReadyToSend(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logIn({ email, password });
    navigate(location.state?.from ?? '/');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor={emailId}>이메일</label>
      <input
        type="email"
        id={emailId}
        value={email}
        onChange={handleChange}
        name="email"
      />

      <label htmlFor={passwordId}>패스워드</label>
      <input
        type="password"
        id={passwordId}
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button type="submit" disabled={!readyToSend}>
        로그인
      </button>
    </form>
  );
}
