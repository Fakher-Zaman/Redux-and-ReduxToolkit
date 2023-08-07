import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';
import './App.css';
import Theme from './features/theme/Theme';

function App() {
  return (
    <div className="App">
      <div className='edit'>
        <Counter />
        <Coin />
      </div>
      <Theme />
    </div>
  );
}

export default App;
