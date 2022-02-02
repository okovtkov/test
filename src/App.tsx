import { useState } from 'react';
import Sort from './components/sort/sort';
import List from './components/list/list';
import Profile from './components/profile/profile';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { sortType } from './types';

function App() {
  const [sortType, setSortType] = useState<sortType | ''>('')

  return (
    <div className="app">
      <Sort onChangeSortType={setSortType} />
      <div className="app__wrapper">
        <Routes>
          <Route path="/" element={<List sortType={sortType} />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
