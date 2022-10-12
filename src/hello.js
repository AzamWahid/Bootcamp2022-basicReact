import './App.css';
import './hello.css'

function Hello(props) {
  return (
    <div className="Hello">
      <header className="Hello">
        <div>Hello from {props.filename}.js</div>
      </header>
    </div>
  );
}

export default Hello;
