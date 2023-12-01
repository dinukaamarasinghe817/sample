import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Home = () => {
  const { state , signIn, signOut } = useAuthContext();

  const { isAuthenticated } = state;

  if (!isAuthenticated) {
    console.log(state);
    return (<button onClick={() => signIn()}>SignIn</button>);
  }
  
  console.log(state);
  return (
    <>
      <div className='content'>Home</div>
      {/* <button onClick={() => signIn()}>SignIn</button> */}
      <button onClick={() => signOut()}>SignOut</button>
    </>
  );
}

export default Home;