import React from 'react';
const Protectedroute = ({children}) => {
 
   const auth = true;
 
   if(!auth){
     return <h1>Not Authenticated</h1>
   }
   
   return children;
}
 
export default Protectedroute;