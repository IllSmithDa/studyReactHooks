import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import StudyUseEffect from './subjects/StudyUseEffect';
// import './App.css'
import { themes } from './subjects/contexts/themes';
import StudyUseRef from './subjects/StudyUseRef';
import StudyCustomHook from './subjects/StudyCustomHooks';
import StudyUseContext from './subjects/StudyUseContext';
import StudyUseMemo from './subjects/StudyUseMemo';
import StudyUseCallback from './subjects/StudyUseCallback';
import StudyUseCallback2 from './subjects/StudyUseCallback2';

// creating a context requires setting a default value;;
const ThemeContext = createContext(themes.light)

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="flex flex-col justify-center text-center">
        <StudyUseEffect />
        <StudyUseRef />
        <StudyCustomHook />
        <StudyUseContext />
        <StudyUseMemo />
        <StudyUseCallback />
        <StudyUseCallback2 />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
