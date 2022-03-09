import './null-style.css';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Correspondence from './components/Сorrespondence/correspondence';

function App() {
  return (
    <div className="App container">
      <Header />
      <Navbar />
      <Profile />
      <Correspondence />
    </div>
  );
}

export default App;
