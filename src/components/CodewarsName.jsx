import codewars from '.././assets/codewars.svg';
import { useAnnexe } from '../context/AnnexeContext';

function CodewarsName({ modify, arrStats }) {
  const { capitalize } = useAnnexe();

  return (
    <div className="cwglobal">
      <button className="cwbutton" onClick={() => modify(arrStats)}>
        <div className="cwcard">
          <img className="imgcw" src={codewars} alt="codewars"></img>
          <div className="cwstats">
            <p>
              {capitalize(
                arrStats.name === null || arrStats.name === ''
                  ? arrStats.username
                  : arrStats.name
              )}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default CodewarsName;
