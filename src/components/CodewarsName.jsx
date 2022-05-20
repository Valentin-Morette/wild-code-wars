import codewars from ".././assets/codewars.svg";

function CodewarsName ({modify, arrStats}) {

    return (
            <div className='cwglobal' >
                <button className="cwbutton" onClick={() => modify(arrStats)}>
                    <div className='cwcard'>
                        <img className="imgcw" src={codewars} alt="codewars"></img>
                        <div className='cwstats'>
                            <p>{arrStats.name === null || arrStats.name === "" ? arrStats.username : arrStats.name}</p>
                        </div>
                    </div>
                </button>
            </div>
    )
}

export default CodewarsName;
