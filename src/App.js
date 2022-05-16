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

  const modify = (honor, name, username, leaderboardPosition, ranks) => {
    setDisplay(true);
    sethonor(honor);
    setUsername(username);
    setName(name);
    setLeaderboardPosition(leaderboardPosition);
    setRanks(ranks);
  }

  return (
    <>  
      <CodewarsStatsList modify={modify}/>
      {display && <CodewarsAllStats honor={honor} name={name} username={username} leaderboardPosition={leaderboardPosition} ranks={ranks}/>}
    </>
  );
}

export default App;
