import { lazy } from "react";

export { default as Error } from "./Error.jsx";
export { default as Countries } from "./Countries.jsx";
export const Home = lazy(() => import("./Home.jsx"));
export const CountryDetailed = lazy(() => import("./CountryDetailed.jsx"));
export const Activity = lazy(() => import("./Activity.jsx"));