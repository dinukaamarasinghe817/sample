import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Auth = () => {

  const { state, getDecodedIDToken, signOut } = useAuthContext();
  // console.log(getDecodedIDToken);

  async function getToken(){
    const decodedIDToken = await getDecodedIDToken();
    console.log(decodedIDToken);
    console.log(state);
  }

  getToken();

  // if(getDecodedIDToken){
  //   return (
  //     <>
  //     <div className='content'>Authenticated</div>
  //     <button onClick={() => signOut()}>SignIn</button>
  //     </>
  //   );
  // }else{
  //   return (
  //     <div className='content'>Not Authenticated</div>
  //   );
  // }
}

export default Auth;