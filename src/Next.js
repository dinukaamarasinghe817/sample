import React from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const Next = () => {

  const { state } = useAuthContext();

  console.log(state);

  return (
    <>
      <div className='content'>Next Path</div>
    </>
  );
}

export default Next;