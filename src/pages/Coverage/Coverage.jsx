import React from "react";
import PageHeading from "../Shared/PageHeading/PageHeading";
import { FaSearch } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../node_modules/leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [51.505, -0.09];
  return (
    <div className="space-y-10">
      <PageHeading heading="We are available in 64 districts"></PageHeading>
      {/* searching */}
      <div className="w-full max-w-xl">
        <div className="flex items-center bg-base-200 rounded-full p-2">
          {/* Icon */}
          <FaSearch className="ml-3 text-gray-400" />

          {/* Input */}
          <input
            type="text"
            placeholder="Search here"
            className="w-full focus:outline-none"
          />

          {/* Button */}
          <button className="btn bg-lime-400 hover:bg-lime-500 text-black rounded-full px-6">
            Search
          </button>
        </div>
      </div>
      {/* map */}
      <MapContainer
        className="h-[500px]"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Coverage;
