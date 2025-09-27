
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
      </Routes>

      {/* <Blog/> */}
    </>
  )
}

export default App
