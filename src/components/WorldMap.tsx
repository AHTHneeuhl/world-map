import { LeafletMouseEvent } from "leaflet";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WorldMap: React.FC = () => {
  const handleClick = (e: LeafletMouseEvent) => {
    const { latlng } = e;
    // Use latlng to determine the country name or perform any other action
    console.log("Clicked at coordinates:", latlng);
  };

  const ClickEventWrapper = () => {
    useMapEvents({
      click: handleClick,
    });

    return null;
  };

  return (
    <MapContainer
      center={[20, 77]}
      zoom={2}
      scrollWheelZoom={false}
      className="w-[72%] h-[80vh] text-center my-5 rounded-2xl border border-neutral-100 hover:shadow"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ClickEventWrapper />
    </MapContainer>
  );
};

export default WorldMap;
