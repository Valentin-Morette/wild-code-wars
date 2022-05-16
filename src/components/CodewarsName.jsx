import codewars from ".././assets/codewars.svg";

function CodewarsName ({username, name, honor, modify, leaderboardPosition, ranks, chal}) {

    return (
            <div className='cwglobal' >
                <button className="cwbutton" onClick={() => modify(honor, name, username, leaderboardPosition, ranks, chal)}>
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

export default CodewarsName;
