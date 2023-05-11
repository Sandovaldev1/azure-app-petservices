import React, { useEffect, useState } from 'react';
import './Mapa.css';

function Map() {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    script.onload = () => {
      // Get user location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        });
      }
    };
  }, []);

  useEffect(() => {
    if (location) {
      // Initialize map
      const mapOptions = {
        center: location,
        zoom: 13,
      };
      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      setMap(map);
    }
  }, [location]);

  function searchPlaces(type) {
    // Search for places near user location based on type
    const request = {
      location,
      radius: 20000,
      type,
    };
    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === 'OK') {
        // Remove previous markers
        markers.forEach(marker => marker.setMap(null));
        // Add markers for each place found
        const newMarkers = results.map(result => {
          const marker = new window.google.maps.Marker({
            position: result.geometry.location,
            map,
          });
          // Add click event listener to marker to show place info
          marker.addListener('click', () => {
            const placeRequest = {
              placeId: result.place_id,
              fields: ['name', 'formatted_address', 'formatted_phone_number', 'website', 'rating', 'reviews'],
            };
            service.getDetails(placeRequest, (place, status) => {
              if (status === 'OK') {
                const infoWindow = new window.google.maps.InfoWindow({
                  content: `
                    <div>
                      <h2>${place.name}</h2>
                      <p>${place.formatted_address}</p>
                      <p>${place.formatted_phone_number}</p>
                      <p><a href="${place.website}" target="_blank">${place.website}</a></p>
                      <p>Rating: ${place.rating} (${place.reviews.length} reviews)</p>
                    </div>
                  `,
                });
                infoWindow.open(map, marker);
              }
            });
          });
          return marker;
        });
        setMarkers(newMarkers);
      }
    });
  }

  return (

    <div className='container-fluid'>

        <div className='Select'>
        <p>
          <h3>¿Como funciona?</h3>
          <span>1- Activa tu ubicación para mostrar los resultados.</span>
          <br/>
          <span>2- Selecciona el servicio que deseas buscar.</span>
          <br/>
          <span>3- Presiona cualquier de los marcadores rojos para ver información del negocio.</span>
          <br/>
          <br/>
          Los servicios cercanos de nuestro mapa son:
          <br/>
          1- Veterinarias  🩺 
          <br/>
          2- Hospitales Veterinarios  🏨  
          <br/>
          3- Tiendas para mascotas    🐾 
        </p>
        <p>Por favor selecciona el servicio para tu mascota:  👇  </p>

        <select onChange={e => searchPlaces(e.target.value)} className='Options'>
          <option value="veterinary_care">Hospitales veterinarios</option>
          <option value="veterinary_care">Veterinarias</option>
          <option value="pet_store">Tiendas para mascotas</option>
        </select>
      </div>
      <div className='container'>
      <div id="map"></div>
    </div>
    </div>
  );
}

export {Map};