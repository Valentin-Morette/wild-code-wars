import CodewarsName from "./CodewarsName";
import { useEffect, useState } from "react";
import axios from "axios";

const promoKrilin = [
  "QuentinSamuel",
  "Simon-Duc",
  "Birious",
  "Jsuiscoince",
  "nibor51",
  "Alexandra-Rdrgs",
  "Louis0512",
  "theoDep",
];

function CodewarsNameList({ modify }) {
  const [honor, setHonor] = useState();

  function searchAllHonor() {
    Promise.all(
      promoKrilin.map((name) => {
        return axios.get(`https://www.codewars.com/api/v1/users/${name}`);
      })
    ).then((res) => {
      setHonor(res.map((res) => res.data));
    });
  }

  useEffect(searchAllHonor, []);

  return (
    <ul className="namelist">
      {honor &&
        honor.map((x) => (
          <li key={x.id} className="cwglobal">
            <CodewarsName arrStats={x} modify={modify} />
          </li>
        ))}
    </ul>
  );
}

export default CodewarsNameList;
