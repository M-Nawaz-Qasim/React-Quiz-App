import './App.css';
import Quiz from './components/Quiz';
import { useState } from 'react';

function App() {
  const [LightMode, darkMode] = useState(true);
  const background = {
    background: LightMode ? "#ffffff" : "#0F172A",
    color: LightMode ? "#0F172A" : "#ffffff",
  }
  return (
    <>
      <div style={background} className='min-h-[100vh] text-white flex flex-col items-center gap-5 pb-10 lg:pb-0'>
        <div className='flex flex-col items-center'>
          <button onClick={() => darkMode(!LightMode)} className='w-64 inline'><img className='w-8 mt-5 inline' src={LightMode ? './images/darkmode.svg' : './images/lightmode.svg'} alt='button to enable dark/light mode' /></button>
        <p className='font-medium'>
          {LightMode ? "Enable Dark Mode" : "Enable Light Mode"}
        </p>
        </div>
        <h1 className='text-center text-4xl lg:text-6xl font-bold py-10'>Welcome to react Quiz app <span className='text-xl block lg:inline mt-2 lg:mt-0'>by Muhammad Nawaz</span></h1>
        <Quiz />
      </div>
    </>
  );
}

export default App;
