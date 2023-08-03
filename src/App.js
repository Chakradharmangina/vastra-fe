import AdminPannel from './Admin/View';
import './App.css';

import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<AdminPannel/>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
