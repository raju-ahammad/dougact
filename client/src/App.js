import React, { createContext, useState } from 'react'
import Login from './Components/DashBoard/Auth/Login';
import PopupMenu from './Components/Menu/PopupMenu'
import Router from './router'
import useToken from '../src/Components/Utils/useToken.js'
export const MyContext = createContext({});

function App() {
  const [value, setValue] = useState("closeBtn")
  const [close, setClose] = useState("")
 
  const { token, setToken } = useToken();

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
      menuHandle,closeBtnHandle,
      token, setToken
    }

    // if (!token) {
      
    //   return <Login setToken={setToken} />
    // }
    // console.log(token);
  
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
