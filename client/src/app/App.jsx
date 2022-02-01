import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

import Loadingpage from "../components/index";
import GlobalStyles from "./globalStyles.jsx";
import routes from "./routes.js";

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyles/>
      <Suspense fallback={<Loadingpage/>}>{element}</Suspense>
    </>
  );
};
