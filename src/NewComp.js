import { useEffect } from 'react';
import { useAuthContext } from "@asgardeo/auth-react";

const NewComp = () => {
  const { state } = useAuthContext();

  useEffect(() => {
    
    if(state.isAuthenticated){
      console.log("authenticated");
    }else{
      console.log('not authenticated');
    }

  }, [state.isAuthenticated]);
}

export default NewComp;