//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[input,setInput] = useState('');
  return (
    <div className="App">
     <hi> Hello clever programmer!</hi>
     {/** input field */}
     {/** button */}
     {/**messages themselves */}

     <input></input>
     <button>Send Message</button>
    </div>
  );
}

export default App;
