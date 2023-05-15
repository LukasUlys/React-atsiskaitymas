import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register'
import AddNewPeople from './components/Pages/AddNewPeople';

const App = () => {
  return (
    <>
    
  
      <Routes>
        <Route path='/books'>
          <Route index element={<HomePage />} />
          <Route path='newPeople' element={<AddNewPeople />}/>
          <Route path=':id' element={<Register />}/>
          <Route path=':log' element={<Login />}/>
        </Route>
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>


    </>
  );
}

export default App;