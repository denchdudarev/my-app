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
      <div className="b-content">
        {/*<Profile />*/}
        <Correspondence />
      </div>
    </div>
  );
}

export default App;
