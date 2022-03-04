import './null-style.css';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';

function App() {
  return (
    <div className="App container">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
