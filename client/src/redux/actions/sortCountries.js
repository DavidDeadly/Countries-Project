export const SORT_COUNTRIES = "sortCountries";

export function countriesSort({ desc, param: p }) {
  const sorting = desc ? arr => arr.sort((a, b) => a[p] > b[p] ? -1 : 1)
  : arr => arr.sort((a, b) => a[p] > b[p] ? 1 : -1);
  
  return {
    type: SORT_COUNTRIES,
    payload: sorting
  };
}
// Expected Input:
// {
//   desc: true;
//   param: "name" / "population"
// }

//Reducer job:
//  action.parload(countries);