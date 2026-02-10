import React, { useRef } from "react";
import PageHeading from "../Shared/PageHeading/PageHeading";
import { FaSearch } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.6943, 90.24];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.searchValue.value;
    const district = serviceCenters.find((city) =>
      city.district.toLowerCase().includes(location.toLowerCase()),
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="space-y-10">
      <PageHeading heading="We are available in 64 districts"></PageHeading>
      {/* searching */}
      <div className="w-full max-w-xl">
        <form onSubmit={handleSearch}>
          <div className="flex items-center bg-base-200 rounded-full p-2">
            {/* Icon */}
            <FaSearch className="ml-3 text-gray-400" />

            {/* Input */}
            <input
              type="text"
              name="searchValue"
              placeholder="Search here"
              className="w-full focus:outline-none"
            />

            {/* Button */}
            <button className="btn bg-lime-400 hover:bg-lime-500 text-black rounded-full px-6">
              Search
            </button>
          </div>
        </form>
      </div>
      {/* map */}
      <MapContainer
        className="h-200"
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenters.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>{center.city}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
