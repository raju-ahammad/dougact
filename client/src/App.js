import React, { createContext, useState } from 'react'
import PopupMenu from './Components/Menu/PopupMenu'
import Router from './router'
import useToken from '../src/Components/Utils/useToken.js'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

export const MyContext = createContext({});

function App() {
  const [value, setValue] = useState("closeBtn")
  const [close, setClose] = useState("")
  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(false)
  const [workData, setWorkData] = useState([])
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
    const fetchWorkData = async () => {
      const res = await axios.get('/api/works')
      console.log(res);
      setLoading(true)
      setWorkData(res.data)
      setLoading(false)
  }


    const provider = {
      value, setValue,
      close, setClose,
      menuHandle,closeBtnHandle,
      token, setToken,
      loading, blogData, 
      fetchBlogData, fetchWorkData, workData, setWorkData
    }

   ;
  
  return (
    <BrowserRouter>
      <MyContext.Provider value={provider}>
      <div className="App">
        <div  onClick={menuHandle} className="bars__icon"><i className="fal fa-bars"></i></div>
        <PopupMenu />
      
        <Router/>
       
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
