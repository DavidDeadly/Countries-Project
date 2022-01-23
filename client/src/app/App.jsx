import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";

import { Home, Countries, Country, Activity, Error } from "../components/index.jsx"
import GlobalStyles from "./globalStyles.jsx";
import { getCountries } from "../redux/actions/getCountries.js";

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
            <Route path=":id" element={<Country/>}/> 
          </Route>
          <Route path="activity" element={<Activity/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </>
  );
};
