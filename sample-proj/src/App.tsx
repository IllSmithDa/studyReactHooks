import { useState } from 'react'
import reactLogo from './assets/react.svg'
import StudyUseEffect from './subjects/StudyUseEffect';
// import './App.css'
import StudyUseRef from './subjects/StudyUseRef';
import StudyCustomHook from './subjects/StudyCustomHooks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center text-center">
      <StudyUseEffect />
      <StudyUseRef />
      <StudyCustomHook />
    </div>
  )
}

export default App
