
import './App.css';
import InputFocus from './inputfocus';
import PreviousState from './prevstate';
import Norender from './norendar';

function App() {
  return (
    <div className="App">
        <Norender/>
        <InputFocus/>
        <PreviousState/>
    </div>
  );
}

export default App;