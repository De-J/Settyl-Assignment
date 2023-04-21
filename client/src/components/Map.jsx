import { MapContainer, TileLayer, Marker } from "react-leaflet"
import "leaflet/dist/leaflet.css"

export default function Map({coord}) {
    const {latitude, longitude} = coord;
    const marker = {
        geocode: [latitude, longitude],
    }
    return (
        <MapContainer
            center={[latitude, longitude]} 
            zoom={13}>
            <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={marker.geocode}></Marker>
        </MapContainer>
    )
}