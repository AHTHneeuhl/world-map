import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useCountries from "@/hooks/useCountries";
import { EmptyState, Spinner } from "@/components/common";
import { LatLng, LatLngExpression } from "leaflet";

const WorldMap: React.FC = () => {
  const { country, isLoading } = useCountries();

  const position: LatLngExpression | undefined = country?.latlng
    ? new LatLng(country.latlng[0], country.latlng[1])
    : undefined;

  if (isLoading)
    return (
      <EmptyState>
        <Spinner />
      </EmptyState>
    );

  return (
    <MapContainer
      center={position}
      zoom={2}
      scrollWheelZoom={false}
      className="w-[72%] h-[80vh] text-center my-5 rounded-2xl border border-neutral-100 hover:shadow"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};

export default WorldMap;
