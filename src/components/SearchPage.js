import React, { useState } from "react";
import Search from "./Search";
import SortBy from "./SortBy";

const SearchPage = ({ cities, setCities }) => {
  const [hotel, setHotels] = useState([]);
  
  const ImageWithAlt = ({ src, alt, className }) => (
    <img loading="lazy" src={src} className={className} alt={alt} />
  );

  const InfoSection = ({ rating, cost, tax }) => (
    <section className="flex lg:self-center lg:mt-0 mt-4 md:mt-16">
      <div className="flex items-center justify-between gap-20 w-full max-w-md lg:flex-col lg:items-start lg:gap-0">
        <div className="flex gap-3 items-center ">
          <p className="bg-[#003B95] text-white text-xs p-2">
            Rating: {rating}
          </p>
        </div>
        <div className="flex flex-col justify-center align-center mt-8 gap-2">
          <p className="text-lg text-neutral-700">Rs.{cost}</p>
          <p className="text-xs text-neutral-400">
            + Rs.{tax} taxes and charges
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <div>
        <Search
          cities={cities}
          setCities={setCities}
          hotel={hotel}
          setHotels={setHotels}
        />
        <SortBy hotel={hotel} setHotels={setHotels} />
      </div>
      <div className="">
        {hotel.map((element) => {
          return (
            <div key={element.id} className="flex flex-col lg:flex-row items-center justify-center w-full p-6 lg:gap-10 border border-gray">
              <div>
                <ImageWithAlt
                  src={element.images[0]}
                  alt="Main hotel image"
                  className="h-[244px] w-[374px]"
                />
                <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                  <img
                    src={element.images[1]}
                    alt="Hotel thumbnail 1"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                    }}
                  />
                  <img
                    src={element.images[2]}
                    alt="Hotel thumbnail 2"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                    }}
                  />
                  {element.images[3] && (
                    <img
                      src={element.images[3]}
                      alt="Hotel thumbnail 3"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                      }}
                    />
                  )}
                  {element.images[4] && (
                    <img
                      src={element.images[4]}
                      alt="Hotel thumbnail 4"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full">
                <div className="lg:max-w-md flex flex-col lg:mt-0 text-xs">
                  <h2 className="text-lg text-blue-600">{element.name}</h2>
                  <address className="mt-2 lg: text-blue-500">
                    {element.location}
                  </address>
                  <div className="flex flex-col px-2 mt-6">
                    <strong className="text-zinc-700">
                      {element.rooms.roomType}
                    </strong>
                    <span className="mt-2 text-zinc-600">
                      {element.rooms.bedDetail}
                    </span>
                    <div className="flex gap-2.5 mt-3.5 text-green-600">
                      <span className="flex-auto">
                        {element.rooms.cancellationPolicy}
                      </span>
                    </div>
                  </div>
                </div>
                <InfoSection
                  rating={element.rating}
                  cost={element.rooms[0].costDetails.baseCost}
                  tax={element.rooms[0].costDetails.taxesAndFees}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchPage;

