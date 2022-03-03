import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Profile from './components/profile';

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
