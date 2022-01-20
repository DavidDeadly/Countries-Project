import { Routes, Route } from "react-router";

import './App.css';
import { Home, Countries, Country, Activity, Error } from "../components/index.jsx"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="countries" element={<Countries/>}>
          <Route path=":id" element={<Country/>}/>
        </Route>
        <Route path="activity" element={<Activity/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
};
