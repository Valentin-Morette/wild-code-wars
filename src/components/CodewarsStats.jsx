import codewars from ".././assets/codewars.svg";

function CodewarsStats ({honor, username, name}) {

    return (
            <div className='cwglobal'>
                <a href={`https://www.codewars.com/users/${username}`}target="_blank" rel="noreferrer">
                    <div className='cwcard'>
                        <img className="imgcw" src={codewars} alt="codewars"></img>
                        <div className='cwstats'>
                            <p>{name === null || name === "" ? username : name}</p>
                            <p>Honor : {honor}</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default CodewarsStats;
