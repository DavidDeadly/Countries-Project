import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

import GlobalStyles from "./globalStyles.jsx";
import routes from "./routes.js";

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyles/>
      <Suspense fallback={<h1 style={{textAlign:"center"}}>Loading Home...</h1>}>{element}</Suspense>
    </>
  );
};
