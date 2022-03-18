import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const fighters =[
  {name:'conor-mcgragor', weightClass:'lightWeight'},
  {name: 'The-eagle', weightClass:'WalterWeight'},
  {name:'Khamzat', weightClass:'lightweight'},
  {name: 'la quinta', weightClass:'featherweight'},
  {name:'edson barboza', weightClass:'featherweight'}
]

function App() {
  return (
    <div className="App">
      
    <Counter></Counter>
    <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )
}

function Users(props){
  return(
    <div>
      <h3> Name: {props.name} </h3>
      <h4>Email: {props.email}</h4>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(7)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function Person(props){
  console.log(props);
  return (
  <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.weightClass}</p>
  </div>
  )
}

function Friend(){
  return(
    <div className='container'>
      <h3>Name: Khabib Nurmagomedov</h3>
      <p>Weight: 155 pound</p>
    </div>
  )
}

export default App;
