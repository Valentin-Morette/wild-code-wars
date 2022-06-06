function CodewarsAllStats ({arrStats}) {

    function objectTitle () {
        let arr = [];
        for (const [key, value] of Object.entries(arrStats.ranks.languages)) {
            arr.push([key, value]);
        }
        return arr;
    }

    return (
        <div>
            <ul className='cwstatsAll'>
                <li className="statsName">{arrStats.name === null || arrStats.name === "" ? arrStats.username.toUpperCase() : arrStats.name.toUpperCase()}</li>
                <li>Rank : {arrStats.ranks.overall.name}</li>
                <li>Kata reussi : {arrStats.codeChallenges.totalCompleted}</li>
                <li>Score total : {arrStats.honor}</li>   
                {objectTitle().filter(y => y[1].score >= 10).map(x => <li>Score {x[0]} : {x[1].score}</li>)}
                <li>Leaderboard : {arrStats.leaderboardPosition === null ? "Non disponible" : arrStats.leaderboardPosition+"ème"}</li>
            </ul>
            <button></button>
        </div>
    )
}

export default CodewarsAllStats;