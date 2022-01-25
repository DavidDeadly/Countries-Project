import { Home, Countries, CountryDetailed, Activity, Error } from "../components/index.jsx";

const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "countries",
    element: <Countries/>,
    children: [
      {
        path: ":code",
        element: <CountryDetailed/>
      }
    ]
  }, 
  {
    path: "activity",
    element: <Activity/>
  },
  {
    path: "*",
    element: <Error/>
  }
];

export default routes;