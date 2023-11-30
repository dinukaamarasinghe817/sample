import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Auth = () => {

  const { state: { isAuthenticated, isLoading }, signIn } = useAuthContext();

  if(isAuthenticated){
    return (
      <div className='content'>Authenticated</div>
    );
  }else{
    return (
      <div className='content'>Not Authenticated</div>
    );
  }
}

export default Auth;