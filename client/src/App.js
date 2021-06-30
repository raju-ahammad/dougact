import React, { useState } from 'react'
import PopupMenu from './Components/Menu/PopupMenu'
import Router from './router'

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



  return (
    <div className="App">
      <div onClick={menuHandle} className="bars__icon"><i className="fal fa-bars"></i></div>
      <PopupMenu classValue={value} closeBtn={close} closeBtnHandle={closeBtnHandle}/>
      <Router/>
    </div>
  );
}

export default App;
