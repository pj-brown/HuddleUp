import React, { useContext, useState } from 'react';
import UserContext from '../context/user';
import { auth, signInWithGoogle } from '../firebase/init';
import { Redirect } from 'react-router-dom';

const Splash = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signedIn, setSignedIn] = useState(true);

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || password === '') return;

    let currentUser;

    try {
      if (signedIn) {
        const { user: authUser } = await auth.signInWithEmailAndPassword(email, password);
        currentUser = authUser;
      } else {
        const { user: newUser } = await auth.createUserWithEmailAndPassword(email, password);
        currentUser = newUser;
      }

      setUser({ displayName: currentUser.email, email: currentUser.email });
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ displayName: currentUser.email, email: currentUser.email })
      );
    } catch (err) {
      console.log(err);
    }
  };



  if (user) return <Redirect to="/main" />

  return (
    <div>
      <h1>{signedIn ? "Sign In" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <span>Email</span>
        <input type="email" name="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
        <div>
          <button >{signedIn ? "Sign In" : "Sign Up"}</button>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
        <div>
          <span>{signedIn ? "Don't" : "Already"} have an account?</span>
          <button onClick={() => setSignedIn(!signedIn)}>{signedIn ? "Sign Up" : "Sign In"}</button>
        </div>
      </form>

    </div>
  );
};

export default Splash;