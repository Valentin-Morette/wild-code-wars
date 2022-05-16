import CodewarsStats from "./CodewarsStats";
import { useEffect, useState } from 'react';
import axios from 'axios';

const promoKrilin = ["QuentinSamuel", "Simon-Duc", "Birious", "Jsuiscoince", "nibor51", "Alexandra-Rdrgs", "loulou", "theoDep"];
let allStats = [];
for (let i = 0; i < promoKrilin.length; i++){
    allStats.push(promoKrilin[i]);
}
console.log(allStats)

function CodewarsStatsList() {
    const [honor, setHonor] = useState();

    function searchHonor(){
        axios
          .get(`https://www.codewars.com/api/v1/users/${promoKrilin[0]}`)
          .then((resp) => resp.data)
          .then((data) => setHonor(data));
      }

    useEffect(searchHonor,[]);

    return (
        honor && (<CodewarsStats honor={honor}/>)
    );
}

export default CodewarsStatsList;