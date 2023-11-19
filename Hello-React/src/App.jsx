// src/App.jsx
import './App.css';
import Navbar from './Components/navbar';
import Button from './components/Button';
import Features from './components/Features';

function App() {
  return (
    <div className='App'>
      <div className='main'>
        <Navbar />
        <div className='text'>
          <h1> Say hello to ReactJS</h1>
          <p className='main-text'>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <Button />
        </div>
      </div>
      <Features />
    </div>
  );
}

export default App;
