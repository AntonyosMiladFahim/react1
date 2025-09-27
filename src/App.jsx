
import { useState } from 'react'

import Navc from './components/Navc';
import Headerc from './components/Headerc';
import Footerc from './components/Footerc';
import Ccomponent from './components/Ccomonent';
import Hcomponent from './components/Hcomponent';
import Login from './components/Login';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Singleblog from './components/Singleblog';
import Singlepost from './components/Singlepost';
import Errorpage from './components/Errorpage';
import Homedashboard from './components/dashboard/Homedashboard'; 
import Postsdashboard from './components/dashboard/Postsdashboard';
import Protectedroute from './components/Protectedroute';
import Layout from './components/dashboard/Layout';
import Usersdashboard from './components/dashboard/Usersdashboard';

function App() {
  const [counter, setCount] = useState(0)

  return (
    <>
      {/* <Navc />
      <Headerc />
      <Ccomponent myname="Antonyos " message="hello " />
      <Hcomponent/>
      <Login/>
      <Footerc /> */}
      <Routes>
        <Route path="/" element={<Blog/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/posts" element={<Blog/>}/>
        <Route path="/posts/:id" element={<Singlepost/>}/>
        <Route path="/dashboard" element={<Protectedroute><Layout/></Protectedroute>} >
          <Route index element={<Homedashboard />} />
          <Route path="users" element={<Usersdashboard />} />
          <Route path="posts" element={<Postsdashboard />} />
        </Route>
        <Route path ="/*" element={<Errorpage/>}/>
      </Routes>

      {/* <Blog/> */}
    </>
  )
}

export default App
