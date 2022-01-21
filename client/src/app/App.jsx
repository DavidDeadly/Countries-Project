import { Routes, Route } from "react-router";

import { Home, Countries, Country, Activity, Error } from "../components/index.jsx"
import GlobalStyles from "./globalStyles.jsx";

export default function App() {
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
