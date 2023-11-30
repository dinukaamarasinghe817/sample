import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Auth = () => {

  const { state: { isAuthenticated }, signOut } = useAuthContext();

  if(isAuthenticated){
    return (
      <>
      <div className='content'>Authenticated</div>
      <button onClick={() => signOut()}>SignIn</button>
      </>
    );
  }else{
    return (
      <div className='content'>Not Authenticated</div>
    );
  }
}

export default Auth;