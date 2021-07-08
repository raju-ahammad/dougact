import React, { createContext, useState } from 'react'
import PopupMenu from './Components/Menu/PopupMenu'
import Router from './router'
import useToken from '../src/Components/Utils/useToken.js'
import axios from 'axios';

export const MyContext = createContext({});

function App() {
  const [value, setValue] = useState("closeBtn")
  const [close, setClose] = useState("")
  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(false)
  const { token, setToken } = useToken();

  
  
    const menuHandle = () => {
        setValue("popupBtn")
    }

    const closeBtnHandle = () => {
        setClose("closeBtn")
        setValue("closeBtn")
    }

    const fetchBlogData = async () => {
        setLoading(true)
        const res = await axios.get('/api/blog')
        setBlogData(res.data)
        setLoading(false)
    }
    

    const provider = {
      value, setValue,
      close, setClose,
      menuHandle,closeBtnHandle,
      token, setToken, loading, blogData, fetchBlogData
    }

   ;
  
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
