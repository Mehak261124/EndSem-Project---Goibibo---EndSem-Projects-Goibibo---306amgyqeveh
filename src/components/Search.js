import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const Search = ({ cities, setCities, hotel, setHotels }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    async function getData(url, projectId) {
      const headers = {
        projectId: projectId,
      };

      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      return await response.json(); // Parse the JSON response
    }

    // Example usage
    const url = "https://academics.newtonschool.co/api/v1/bookingportals/city";
    const projectId = "306amgyqeveh"; // Replace with your actual project ID

    getData(url, projectId)
      .then((responseData) => {
        setCities(responseData.data.cities);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    async function getHotels(projectId) {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${selectedValue}"}`,
          {
            method: "GET",
            headers: {
              projectId: "treoo5dhf86s",
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data.data);
        setHotels(data.data.hotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    }
    getHotels("306amgyqeveh");
  }, [selectedValue]);

  console.log(cities);

  return (
    <nav className="flex items-center justify-between bg-orange-500 p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <p className="text-white text-2xl font-bold">CITY</p>
        <div className="flex items-center bg-white rounded-md w-94">
          <select
            onChange={handleChange}
            value={selectedValue}
            className="p-2 border-l border-gray-300 bg-white"
          >
            <option value="" disabled>
              Search Here
            </option>
            {cities.map((option) => (
              <option key={option._id} value={option.cityState}>
                {option.cityState}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="bg-white text-blue-500 p-2 w-40 rounded-md  transition">
        <b>Search</b>
      </button>
    </nav>
  );
};

export default Search;
