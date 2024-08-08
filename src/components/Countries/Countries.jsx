"use client";

import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://covid-19-data.p.rapidapi.com/help/countries?format=json";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2bf77c1503mshd9d95f4ab1d0552p1a504ejsne259648bf895",
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async (retries = 3, delay = 1000) => {
      setLoading(true);
      console.log("Fetching data...");
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          if (response.status === 429 && retries > 0) {
            setTimeout(() => fetchData(retries - 1, delay * 2), delay);
            return;
          }
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Data fetched successfully:", result);
        setCountries(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-container bg-gray-900 text-white min-h-screen p-6">
      <h1 className="home-title text-3xl font-bold mb-4 text-red-600">
        Total Deaths 87,859
      </h1>
      <ol className="countries-list flex flex-col gap-3">
        {loading && <Loading />}
        {countries.map((country) => (
          <li key={country.alpha3code} className="country-item">
            <div className="flex justify-between country-card p-4 bg-gray-800 shadow-lg rounded-lg hover:bg-purple-700 hover:text-white transition-colors transform hover:-translate-y-1">
              <h2 className="country-name text-gray-300">{country.name}</h2>
              <h2 className="country-deaths text-gray-300">47,300</h2>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Countries;
