import Counter from './Counter'
import Input from './Input'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Test React</h1>
      <button disabled  aria-label="Disabled">Click</button>
      <button aria-label="Enable" data-testid="enableBtn" >Enable</button>
      <p className="text">Happy codding</p>
      <Counter />
      <Input />
      
    </div>
  );
}

export default App;
