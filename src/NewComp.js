import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const NewComp = () => {
  const { state, getDecodedIDToken, getBasicUserInfo, signOut } = useAuthContext();
  // console.log(getDecodedIDToken);

  async function getToken(){
    getDecodedIDToken().then((res) => {
      console.log(res);
      console.log("here is the state variable");
      console.log(state);
    })
    
    getBasicUserInfo().then((basicUserDetails) => {
      console.log(basicUserDetails);
      console.log(state);
    })
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

export default NewComp