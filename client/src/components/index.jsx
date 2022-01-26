import { lazy } from "react";

// export { default as Activity } from "./Activity.jsx";
export { default as Error } from "./Error.jsx";
export const Home = lazy(() => import("./Home.jsx"));
export const Countries = lazy(() => import("./Countries.jsx"));
export const CountryDetailed = lazy(() => import("./CountryDetailed.jsx"));
export const Activity = lazy(() => import("./Activity.jsx"))