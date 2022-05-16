import CodewarsStats from "./CodewarsStats";
import { useEffect, useState } from 'react';
import axios from 'axios';

const promoKrilin = ["QuentinSamuel", "Simon-Duc", "Birious", "Jsuiscoince", "nibor51", "Alexandra-Rdrgs", "loulou", "theoDep"];

function CodewarsStatsList({modify}) {
    const [honor, setHonor] = useState();

    function searchAllHonor(){

        Promise.all([
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[0]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[1]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[2]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[3]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[4]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[5]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[6]}`),
            axios.get(`https://www.codewars.com/api/v1/users/${promoKrilin[7]}`)
        ]).then((responses) => {
            const responsesData = responses.map((response) => response.data);
            setHonor(responsesData)});

      }

    useEffect(searchAllHonor,[]);

    return (
        honor && honor.map((x) => (<CodewarsStats modify={modify} honor={x.honor} username={x.username} name={x.name} ranks={x.ranks.overall.name} leaderboardPosition={x.leaderboardPosition}/>))
    );
}

export default CodewarsStatsList;