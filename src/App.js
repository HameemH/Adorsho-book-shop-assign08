import logo from './logo.svg';
import './App.css';
import Bookshop from './Component/Bookshop/Bookshop';
import QNA from './Component/QNA/QNA.js';

function App() {
  return (
    <div className='app'>
      <h1>Adorsho Book Shop</h1>
      <Bookshop/>
      <QNA/>
    </div>
  );
}

export default App;
