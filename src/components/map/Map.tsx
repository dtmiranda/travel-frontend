import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";


export default function Map() {

  const [initialCoordinate, setInitialCoordinate] = useState<[number, number]>([0, 0]);



  useEffect(() => {

    navigator.geolocation.getCurrentPosition(coordinate => {
      const { latitude, longitude } = coordinate.coords;

      setInitialCoordinate([latitude, longitude]);
    })

  }, [])

  return (
    <>

      <MapContainer
        style={{ width: '100%', height: '25rem' }}
        center={initialCoordinate}
        zoom={13}
        scrollWheelZoom={true}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={initialCoordinate}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>


  )
}