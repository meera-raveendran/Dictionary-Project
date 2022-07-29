import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
        DICTIONARY APP       
      </header>
      <main className='App-main'>
        <Dictionary defaultKeyword="yoga"/>
      </main>
      <footer className="App-footer">
        <small> coded by Meera Raveendran</small>       
      </footer>
      </div>
    </div>
  );
}


