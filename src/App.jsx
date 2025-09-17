
import { useState } from 'react'

import Navc from './components/Navc';
import Headerc from './components/Headerc';
import Footerc from './components/Footerc';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navc />
      <Headerc />
      <Footerc />
    </>
  )
}

export default App
