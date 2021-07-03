import React, { createContext, useState } from 'react'

export const MyContext = createContext({});

const MyProvider = (props) => {

    const [value, setValue] = useState("closeBtn")
    const [close, setClose] = useState("")


    const menuHandle = () => {
        setValue("popupBtn")
    }

    const closeBtnHandle = () => {
        setClose("closeBtn")
        setValue("closeBtn")
    }

    // const providerValue = {
    //     value, setValue,
    //     close, setClose,
    //     menuHandle,
    //     closeBtnHandle
    // }

    

    return (
        <MyContext.Provider
        value={{ value: "foo" }}
        >
            {props.children}
        
        </MyContext.Provider>
    )
}

export default MyProvider
