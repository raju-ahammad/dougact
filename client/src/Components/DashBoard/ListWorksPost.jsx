import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'
import Logo from '../Button/Logo'
import SideBar from '../Menu/SideBar'
import './dasboard.css'


const ListWorksPost = () => {
    const context = useContext(MyContext)
    const {workData, fetchWorkData, loading} = context

    useEffect(() => {
        fetchWorkData()
    }, [])

    const deleteHandle = async (id) => {
        try {
            if (window.confirm("Are you sure you to delete this account !")) {
                await axios.delete(`/api/blog/delete/${id}`)
                fetchWorkData()
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="list__blog">
            <Logo/>
            <div className="dashBoard__wrapper">
                <SideBar/>
                <div className="post__list">
                <div className="create__post__btn"><Link to="/dashboard/work/create">Create New Post +</Link></div>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            workData.map((data, i) => (
                                <tr key={i}>
                                    <th scope="row">{ i+1}</th>
                                    <td>{data.title}</td>
                                    <td> <div className="action__list">
                                        <Link to={`/dashboard/work/edit/${data._id}`} className="edit__action mr-3"><i className="fas fa-edit"></i></Link>
                                        <p className="delete__action mx-3 d-inline pointer" onClick={() => deleteHandle(data._id)}><i className="text-danger far fa-trash-alt"></i></p>
                                    </div> </td>
                                </tr>
                            ))
                        }
                       
                    </tbody>
                    </table>
                </div>
            </div>    
        </div>
    )
}

export default ListWorksPost
