import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <ItemListContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
