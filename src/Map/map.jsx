import { MapContainer } from 'react-leaflet/MapContainer'
import {Marker} from 'react-leaflet/Marker'
import { useMapEvents, useMap } from 'react-leaflet/hooks'
import { TileLayer } from 'react-leaflet/TileLayer'
import {Popup}  from 'react-leaflet/Popup'
import 'leaflet/dist/leaflet.css'
import { useCallback, useMemo, useRef, useState } from 'react'
import { API_KEY, urlStr } from '../config'
let center = {
  lat: null,
  lng: null,
}
navigator.geolocation.getCurrentPosition(function (pos) {
  console.log(pos.coords)
  center.lat = pos.coords.latitude;
  center.lng=pos.coords.longitude
}, function (err) {
  console.log(err)
})
function DraggableMarker() {
  const [showLocation, setLocation] = useState(false)
  const [position, setPosition] = useState(center)
  const [loadingState, setLoadingState] = useState(false);
  const markerRef = useRef(null)
  const [locationName, setLocationName] = useState('');
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        // console.log('draged');
        setLocation(false)
        const marker = markerRef.current
        if (marker != null) {
          
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const reverseGecode = async (lat, lng) => {
      
    let data = await (await fetch(`${urlStr}?lat=${lat}&lon=${lng}&apiKey=${API_KEY}`)).json();
    console.log(data)
    setLoadingState(false);
    setLocationName(data.features[0].properties.name)
  }
  const toggleDraggable = useCallback(() => {
    // console.log('clicked')
    setLoadingState(true);
    if(position.lat&&position.lng){reverseGecode(position.lat,position.lng)}
    setLocation((d) => !d)
  }, [position])

// console.log(position,markerRef.current.getLatLng())
  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}>
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {!showLocation ? 'Click here to getlocationname' : (loadingState ? 'Loading...' : `${locationName}`)}
        </span>
      </Popup>
    </Marker>
  )
}

export default function MyMapComponent(props) {


return(
  <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{width:'100vw',height:'100vh'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

    />
    <DraggableMarker position={center}>
      
      <Popup>
        xyz
    </Popup>
      {/* <img src='https://tse3.mm.bing.net/th?id=OIP.vs_BprPwImRvzA8uxJeG0AHaH_&pid=Api&P=0&w=154&h=166'
      alt=' A pretty CSS3 popup. <br /> Easily customizable.'
      >
      </img> */}
    </DraggableMarker>
  </MapContainer>
)
}