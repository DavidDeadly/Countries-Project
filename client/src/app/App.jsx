import { useRoutes } from "react-router-dom";
import { Suspense } from "react";

import StyledLoadingPage from "../components/LoadingPage.jsx";
import GlobalStyles from "./globalStyles.jsx";
import routes from "./routes.js";

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyles/>
      <Suspense fallback={<StyledLoadingPage/>}>{element}</Suspense>
    </>
  );
};
