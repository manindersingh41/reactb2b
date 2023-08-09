
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserDetail from './components/UserDetail';
import Filter from './components/Filter';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/'  element={<Dashboard />} >
        <Route  index element={<Filter />} />
        
        <Route  path='/details/:id'  element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
