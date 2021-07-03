import React, { useContext } from 'react'
import { MyContext } from '../../App'


const Blog = () => {
    const { value, close } = useContext(MyContext)
    console.log(value, close);
    return (
        <div style={{ textAlign:"center" }}>
            Blog Page {value} {close}
        </div>
    )
}

export default Blog
