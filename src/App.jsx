
import { useState } from 'react'

import Navc from './components/Navc';
import Headerc from './components/Headerc';
import Footerc from './components/Footerc';
import Ccomponent from './components/Ccomonent';
import Hcomponent from './components/Hcomponent';
import Login from './components/Login';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <Blog/>
    </>
  )
}

export default App
