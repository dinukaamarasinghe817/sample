import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Home = () => {
  const { state , signIn, signOut, getBasicUserInfo,  getDecodedIDPIDToken } = useAuthContext();

  const { isAuthenticated, getDecodedIDToken } = state;

  async function getData(){
    const basicUserInfo = await getBasicUserInfo();
    const idpidToken = await getDecodedIDPIDToken();
    console.log('basic information');
    console.log(basicUserInfo);
    console.log('id token');
    console.log(idpidToken);
  }

  getData();

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