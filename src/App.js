import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
     <Navi/>
        <Dashboard/>
    </div>
  );
}

export default App;
