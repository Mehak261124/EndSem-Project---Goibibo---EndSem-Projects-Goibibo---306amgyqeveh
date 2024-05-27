import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
// import InfoSection from "./SearchPage"

const Search = ({ cities, setCities, hotel, setHotels, cost }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [rupees,setRupees] = useState(0);

  const handleRupees = (e) => {
    setRupees(e.target.value)
  }
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

    const url = "https://academics.newtonschool.co/api/v1/bookingportals/city";
    const projectId = "306amgyqeveh"; 

    getData(url, projectId)
      .then((responseData) => {
        setCities(responseData.data.cities);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setCities]);
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
  }, [setHotels]);

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
          {/* {hotel.map((element) => {
            return (
              <InfoSection
                // rating={element.rating}
                cost={element.rooms[0].costDetails.baseCost}
                // tax={element.rooms[0].costDetails.taxesAndFees}
              />
            )})} */}
          <select
            onChange={handleRupees}
            value={rupees}>
              <option>
                Search for rupees
              </option>
              console.log(cost);
              {cost.map((option) => (
                <option key ={option.id} value={option.costPerNight}>
                  {option.costPerNight} 
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
