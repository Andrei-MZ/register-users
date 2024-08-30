import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '5565656646552646sf',
      name: 'Andrei',
      age: 27,
      email: 'andreimendes8@gmail.com'
    },
    {
      id: '55656454556552646sf',
      name: 'Lucas',
      age: 29,
      email: 'lucaslegal@gmail.com'
    },
    {
      id: '556766454556552646sf',
      name: 'Cleitin',
      age: 80,
      email: 'cleitorasta@gmail.com'
    }
  ]

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
