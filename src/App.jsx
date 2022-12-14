

import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import InitialMenu from './components/InitialMenu'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'


function App() {
  const [closeForm, setCloseForm] = useState(true)
  const {users,getAllUsers,createNewUser,deleteUserById,updateUserById}= useCrud()
  const [initial, setInitial] = useState(true)
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(()=>{
    getAllUsers()
  },[])//cuando el arreglo está vacío significa que solo se renderizara una vez al inicio
  
  return (
    <div className="App">
      <h1 className='App__title'>Users</h1>
      <button onClick={() => setCloseForm(false)}className='App__btn'>Open Form</button>
      {
      <div className={`form-container ${closeForm && 'close__form'}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
          setInitial={setInitial}
        />
      </div>
      }
      <div className='user-container'>
        {
          users?.map(user  => (
           <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
           />
          ))
        }
        <div className='initial-container'>
        {
          initial?
              <InitialMenu/>
          :console.log('Out menu initial')
          
        }
        </div>
      </div>
    </div>
  )
}

export default App
