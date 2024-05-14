// import { useState } from "react";
// import css from "./CatalogPage.module.css"
import { getAuto } from 'api/autoAPI';

const CatalogPage = () => {
  const getData = async () => {
    const data = await getAuto();
    console.log('data::: ', data);
    };
    
    getData()

  return <h1>CatalogPage</h1>;
};

export default CatalogPage;
