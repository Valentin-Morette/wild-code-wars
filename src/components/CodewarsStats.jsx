import codewars from ".././assets/codewars.svg";

function CodewarsStats ({username, name, honor, modify, leaderboardPosition, ranks}) {

    return (
            <div className='cwglobal' onClick={() => modify(honor, name, username, leaderboardPosition, ranks)}>
                <button className="cwbutton">
                    <div className='cwcard'>
                        <img className="imgcw" src={codewars} alt="codewars"></img>
                        <div className='cwstats'>
                            <p>{name === null || name === "" ? username : name}</p>
                        </div>
                    </div>
                </button>
            </div>
    )
}

export default CodewarsStats;
