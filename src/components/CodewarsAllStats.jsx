import TableStats from './TableStats';

function CodewarsAllStats({ arrStats }) {
  return (
    <div>
      <ul className="cwstatsAll">
        <li className="statsName">
          {arrStats.name === null || arrStats.name === ''
            ? arrStats.username.toUpperCase()
            : arrStats.name.toUpperCase()}
        </li>
        <li>Rank : {arrStats.ranks.overall.name}</li>
        <li>Kata reussi : {arrStats.codeChallenges.totalCompleted}</li>
        <li>Score total : {arrStats.honor}</li>
        <ul className="cwScores">
          <TableStats arrStats={arrStats} />
        </ul>
        <li>
          Leaderboard :{' '}
          {arrStats.leaderboardPosition === null
            ? 'Non disponible'
            : arrStats.leaderboardPosition + 'ème'}
        </li>
      </ul>
    </div>
  );
}

export default CodewarsAllStats;
