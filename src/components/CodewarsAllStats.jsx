import codewars from ".././assets/codewars.svg";

function CodewarsAllStats ({honor, username, name, leaderboardPosition, ranks}) {

    return (
        <div>
            <div className='cwstats'>
                <p>{name === null || name === "" ? username : name}</p>
                <p>Honor : {honor}</p>
                <p>Position dans le leaderboard : {leaderboardPosition === null ? "Non disponible" : leaderboardPosition}</p>
                <p>Rank : {ranks}</p>
            </div>
        </div>
    )
}

export default CodewarsAllStats;