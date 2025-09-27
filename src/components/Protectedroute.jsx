import React from 'react';
const Protectedroute = ({children}) => {
 

   const auth = false;
  const user=localStorage.getItem("user");
  if(!user){
     return <h1>Not Authenticated</h1>
  }
 
   if(!user.role=="admin"){

     return <h1>Not Authenticated</h1>
   }
   
   return children;
}
export default Protectedroute;
