import './App.css';
import './hello.css'

function App(props) {
  return (
    <div className="app">
      <header className="app">
        <div>Hello <strong> {props.name} </strong> My Age is {props.age}+11 means {props.age + 11}</div>
      </header>
    </div>
  );
}

export default App;
