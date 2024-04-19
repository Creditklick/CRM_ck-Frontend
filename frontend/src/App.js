import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import SearchBar from './pages/SearchBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Login />} />

          <Route path='/SearchBar' exact element={<SearchBar />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
