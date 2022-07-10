import { useAnnexe } from '../context/AnnexeContext';

function TableStats({ arrStats }) {
  const { capitalize } = useAnnexe();

  function objectTitle() {
    let arr = [];
    for (const [key, value] of Object.entries(arrStats.ranks.languages)) {
      arr.push([key, value]);
    }
    return arr;
  }

  function compare(a, b) {
    if (a[1].score < b[1].score) return 1;
    if (a[1].score > b[1].score) return -1;
    return 0;
  }

  return objectTitle()
    .sort(compare)
    .map((x) => (
      <li>
        {Object.keys(arrStats.ranks.languages).length > 1 && '- '}
        {capitalize(x[0])} : {x[1].score}
      </li>
    ));
}

export default TableStats;
