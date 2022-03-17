import logo from './logo.svg';
import './App.css';


const saniAge = 23;

const singerStyle = {
  color: 'purple'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>

    </div>
  );
}

function Person(){
  return (
  <div>
    <h1>hello there...</h1>
    <p>jingalala</p>
  </div>
  )
}

export default App;
