
import { useState } from 'react'

import Navc from './components/Navc';
import Headerc from './components/Headerc';
import Footerc from './components/Footerc';
import Ccomponent from './components/Ccomonent';
import Hcomponent from './components/Hcomponent';
import Login from './components/Login';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router';
import { Routes } from 'react-router';
import Singleblog from './components/Singleblog';
import Singlepost from './components/Singlepost';
import Errorpage from './components/Errorpage';
import Dashboard from './../node_modules/react-router/dist/development/index.d';
import Homedashboard from './components/Dashboard/Homedashboard';
import Usersdashboard from './components/Dashboard/Usersdashboard';
import Postsdashboard from './components/Dashboard/Postsdashboard';
import Protectedroute from './components/Protectedroute';
import Layout from './components/Dashboard/Layout';


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
        <Route path="/" element={<Homedashboard />} />
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
