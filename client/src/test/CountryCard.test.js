import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Loadingpage from "../components/LoadingPage.jsx";
import CountryCard from "../components/subComponents/CountryCard.jsx";

describe("Country component", () => {
  let countryCard;
  
  test("Loadingpage Renders", () => {
    const loadingPage = render(<Loadingpage/>);
    loadingPage.getByText("Loading....");
  });

  test("Renders", () => {
    countryCard = render(<CountryCard
      name="Colombia" code="COL" continent="Americas" filtered={false}
    />);
    countryCard.getByText("Colombia");
    countryCard.getByText("COL");
    countryCard.getByText("Americas");
  });

  test("It's visible", () => {
    countryCard = render(<CountryCard
      name="Colombia" code="COL" continent="Americas" filtered={false}
    />)
    const { parentElement: data} = countryCard.getByText("Colombia");
    expect(data.parentElement).toHaveStyle("display: block");
  });

  test("It hides when its imperative", () => {
    countryCard = render(<CountryCard
      name="Colombia" code="COL" continent="Americas" filtered={true}
    />);
    const { parentElement: data } = countryCard.getByText("COL");
    expect(data.parentElement).toHaveStyle("display: none");
  });
});