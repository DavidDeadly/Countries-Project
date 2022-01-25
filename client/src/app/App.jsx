import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";

import { Home, Countries, CountryDetailed, Activity, Error } from "../components/index.jsx"
import GlobalStyles from "./globalStyles.jsx";
import { getCountries } from "../redux/actions/index.js";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="countries" element={<Countries/>}>
            <Route path=":code" element={<CountryDetailed/>}/> 
          </Route>
          <Route path="activity" element={<Activity/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </>
  );
};
