import axios from 'axios'
import { useState } from 'react'

const useCrud = () => {
    const [users, setUsers] = useState() //es para almacenar la data
    const getAllUsers = () =>{
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.get(URL)
        .then(res => setUsers(res.data))//dentro de data se tiene la información como tal
        .catch(err => console.log(err))
      }
    
      const createNewUser = data =>{
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.post(URL, data)
         .then(() =>{ getAllUsers()
                      
        }
         )
         .catch(err => console.log(err))
      }
      const deleteUserById = (id,data) =>{
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.delete(URL)
        .then(()=> {getAllUsers()
        })
        .catch(err => console.log(err))
      }
      
      const updateUserById = (id,data) => {
        const URL = `https://users-crud.academlo.tech/users/${id}/`
        axios.put(URL,data)//PARA QUE SE ACTUALICE
        .then(res=> getAllUsers())//PARA QUE SE VEA REFLEJADO EN LA VISTA
        .catch(err => console.log(err))
      }
      return {users,getAllUsers,createNewUser,deleteUserById,updateUserById}
}

export default useCrud