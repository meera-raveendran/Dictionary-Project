import logo from './logo.png';
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>       
      </header>
      <main className='App-main'>
        <Dictionary/>
      </main>
      <footer className="text-center">
        <small> coded by Meera Raveendran</small>       
      </footer>
      </div>
    </div>
  );
}


