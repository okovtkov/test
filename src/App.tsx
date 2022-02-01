import { useEffect, useState } from 'react';
import Sort from './components/sort/sort';
import List from './components/list/list';
import Profile from './components/profile/profile';
import { users } from './api/users';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { User } from './types';

function App() {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    users.get().then((data) => setData(data));
  }, []);

  return (
    <div className="app">
      <Sort />
      <div className="app__wrapper">
        <Routes>
          <Route path='/' element={<List data={data} />} />
          <Route path='/profile/:id' element={<Profile data={data} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
