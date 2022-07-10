import './App.css';
import CodewarsNameList from './components/CodewarsNameList';
import CodewarsAllStats from './components/CodewarsAllStats';
import { useState } from 'react';
import { AnnexeContextProvider } from './context/AnnexeContext';

function App() {
  const [display, setDisplay] = useState(false);
  const [arrStats, setArrStats] = useState([]);

  const modify = (arrStats) => {
    setDisplay(true);
    setArrStats(arrStats);
  };

  return (
    <AnnexeContextProvider>
      <div className="all">
        <h1>WILD CODE WARS</h1>
        <CodewarsNameList modify={modify} />
        {display && <CodewarsAllStats arrStats={arrStats} />}
      </div>
    </AnnexeContextProvider>
  );
}

export default App;
