import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '1';

  return (
    <div className="App">
      <header className='headerBar'>Test.</header>
      <div>
        <ul>
          <li>
            <img src={ logo }/>
            { posts }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
