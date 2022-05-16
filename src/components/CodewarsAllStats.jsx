function CodewarsAllStats ({honor, username, name, leaderboardPosition, ranks, chal}) {

    return (
        <div>
            <ul className='cwstatsAll'>
                <li className="statsName">{name === null || name === "" ? username.toUpperCase() : name.toUpperCase()}</li>
                <li>Rank : {ranks}</li>
                <li>Honor : {honor}</li>
                <li>Kata reussi : {chal}</li>
                <li>Leaderboard : {leaderboardPosition === null ? "Non disponible" : leaderboardPosition+"ème"}</li>
            </ul>
        </div>
    )
}

export default CodewarsAllStats;