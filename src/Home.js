import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Home = () => {
  const { state: { isAuthenticated, isLoading }, signIn } = useAuthContext();
  return (
    <>
      <div className='content'>Home</div>
      <button onClick={() => signIn()}>SignIn</button>
    </>
  );
}

export default Home;