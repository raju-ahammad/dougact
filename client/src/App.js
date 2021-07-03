import React, { createContext, useContext, useState } from 'react'
import PopupMenu from './Components/Menu/PopupMenu'
import Router from './router'

export const MyContext = createContext({});


function App() {
  const [value, setValue] = useState("closeBtn")
    const [close, setClose] = useState("")


    const menuHandle = () => {
        setValue("popupBtn")
    }

    const closeBtnHandle = () => {
        setClose("closeBtn")
        setValue("closeBtn")
    }
    const provider = {
      value, setValue,
      close, setClose,
      menuHandle,closeBtnHandle

    }
  
  return (
    <MyContext.Provider value={provider}>
    <div className="App">
      <div  onClick={menuHandle} className="bars__icon"><i className="fal fa-bars"></i></div>
      <PopupMenu />
      <Router/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
