//Hooks
import { useEffect } from "react";

//Leaflet components
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import L from "leaflet";

//Styles
import "leaflet-geosearch/dist/geosearch.css";

function GeoSearch() {
  const searchIcon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: { searchIcon },
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, [map, searchIcon]);

  return null;
}

export default GeoSearch;
