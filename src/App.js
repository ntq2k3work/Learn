import './App.scss';
import Variable from "./view/Example/variables";
import UseState from './view/Example/state';
function MyButton() {
  return (
    <h1>HEHEHE</h1>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Variable />
        <UseState />
        <MyButton />
      </header>
    </div>
  );
}

export default App;
