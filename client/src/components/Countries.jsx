import React from "react";
import { Outlet, useParams } from 'react-router-dom';

export default function Countries () {
  const { id } = useParams();

  return (
    <div>
      { id ? <></> 
      : (()=> {
        return (
        <h1>These're my countries</h1>
        )
      })()
      }
      <Outlet/>
    </div>
  );
};