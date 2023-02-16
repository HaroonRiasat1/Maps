import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBXBAHdNBZ0hH-gPA4R3eaNnAxVwq5TbdQ",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map-wrapper">
     
      <Map />
      </div>
  );
}

function Map() {
  const center = useMemo(() => ({ lat: 30.3753, lng: 69.3451 }), []);

  return (
    <div className="map-wrapper">
    <GoogleMap  zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
    </div>
  );
}