import './App.css';
import CodewarsStatsList from './components/CodewarsStatsList';
import CodewarsAllStats from "./components/CodewarsAllStats";
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false);
  const [honor, sethonor] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [leaderboardPosition, setLeaderboardPosition] = useState("");
  const [ranks, setRanks] = useState("");
  const [chal, setChal] = useState("");

  const modify = (honor, name, username, leaderboardPosition, ranks, chal) => {
    setDisplay(true);
    sethonor(honor);
    setUsername(username);
    setName(name);
    setLeaderboardPosition(leaderboardPosition);
    setRanks(ranks);
    setChal(chal);
  }

  return (
    <div className='all'>  
      <h1>WILD CODE WARS</h1>
      <CodewarsStatsList modify={modify}/>
      {display && <CodewarsAllStats honor={honor} name={name} username={username} leaderboardPosition={leaderboardPosition} ranks={ranks} chal={chal}/>}
    </div>
  );
}

export default App;
