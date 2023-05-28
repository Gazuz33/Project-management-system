import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import "./style.scss";
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router';


const Dialogs = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Dialogs