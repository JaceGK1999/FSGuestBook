import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { signInUser, signUpUser } from '../../services/user';

export function Login() {
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const [type, setType] = useState('signIn');

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resp = await signInUser({ email, password });
      setCurrentUser(resp);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const resp = await signUpUser({ email, password });
      setCurrentUser(resp);
      history.push('/');
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h3 onClick={() => setType('signIn')}>Sign In</h3>
      <h3 onClick={() => setType('signUp')}>Sign Up</h3>

      <div>{error}</div>
      <form onSubmit={type === 'signIn' ? handleSignIn : handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{type}</button>
      </form>
    </div>
  );
}

export default Login;
