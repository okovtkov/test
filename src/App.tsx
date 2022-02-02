import { useState } from 'react';
import Sort from './components/sort/sort';
import UserList from './components/user-list/user-list';
import Profile from './components/profile/profile';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SortType } from './types';

function App() {
  const [sortType, setSortType] = useState<SortType | ''>('')

  return (
    <div className="app">
      <Sort onChangeSortType={setSortType} />
      <div className="app__wrapper">
        <Routes>
          <Route path="/" element={<UserList sortType={sortType} />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
