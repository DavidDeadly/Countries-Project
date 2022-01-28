export const SORT_COUNTRIES = "sortCountries";
export const SORT_COUNTRIES_DESC = "sortCountriesDesc";

export function countriesSort({ param: p, desc }) {
  return desc ? {
    type: SORT_COUNTRIES_DESC,
    payload: p
  } : {
    type: SORT_COUNTRIES,
    payload: p
  };
}
// Expected Input:
// {
//   desc: true;
//   param: "name" / "population"
// }

//Reducer job:
//  action.parload(countries);