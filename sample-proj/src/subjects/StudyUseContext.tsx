
// revert to themes.tsx in context to see where we create context for for our light and dark themes 

import { useContext, createContext } from 'react';
import { themes } from './contexts/themes'

// This component will consume the context we created 
function StudyUseContext() {
  // set the theme to light or dark
  const ThemeContext = createContext(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <div className="p-10">
      <h2 className="font-bold">UseContext Section</h2>
      {/* This should be light themed and all the properies of light themed should be applied here */}
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    </div>  
  )
}

export default StudyUseContext;