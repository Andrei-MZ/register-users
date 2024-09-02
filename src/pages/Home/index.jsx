import { useEffect, useState } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  async function getUsers(){
    const userFromApi = await api.get('/users')
    /**
     * Quando eu quiser alterar o valor do 'user' eu preciso pegar o 'setUsers' e setUsers (userFromApi.data) a informação que quero passar
     */
    setUsers (userFromApi.data)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  


  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Name' name='name' type='text' />
        <input placeholder='Age' name='age' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Name: <span>{user.name}</span></p>
            <p>Age: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>

      ))}


    </div>
  )
}

export default Home
