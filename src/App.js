
import './App.css';
import './components/Home';
import './components/About';
function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        |
        <a href="/about">About</a>
      </nav>
     
       <div>
        <Route path="/about">
          </About>
        </Route>
        <Route path="/">
          </Home>
        </Route>
       </div>
    </div>
  );
}

export default App;
