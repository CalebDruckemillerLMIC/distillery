import './App.css';
import { Header } from './components/chrome';
import { AppRoutes } from './renderer';

function App() {
  return (
    <div className="App">
      <AppRoutes>
        <Header/>
      </AppRoutes>
    </div>
  );
}

export default App;
