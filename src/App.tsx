import './App.css';
import Sort from './components/sort/sort';
// import List from './components/list/list';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="app">
      <Sort />
      <div className="app__wrapper">
        {/* <List /> */}
        <Profile />
      </div>
    </div>
  );
}

export default App;
