import codewars from ".././assets/codewars.svg";

function CodewarsStats ({honor}) {

    return (
            <div className='cwglobal'>
                <a href="https://www.codewars.com/users/Alexandra-Rdrgs" target="_blank" rel="noreferrer">
                    <div className='cwcard'>
                        <img className="imgcw" src={codewars} alt="codewars"></img>
                        <div className='cwstats'>
                            <p>{honor.username}</p>
                            <p>Honor : {honor.honor}</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}

export default CodewarsStats;

// QuentinSamuel Simon-Duc Birious Jsuiscoince nibor51 Alexandra-Rdrgs loulou theoDep