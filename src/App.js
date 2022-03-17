import logo from './logo.svg';
import './App.css';


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
      
      {
        fighters.map(fighter => <Person name={fighter.name} weightClass={fighter.weightClass}></Person>)
      }
      {/* <Person name ={fighters[0]} weithtClass="lightweight"></Person>
      <Person name={fighters[1]} weithtClass="walterWeight"></Person>
      <Person name="khamzat" weithtClass="lightweight"></Person>
      <Person name="la quinta" weithtClass="featherweight"></Person> */}
      <h3>New Component</h3>
      <Friend></Friend>

    </div>
  );
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
