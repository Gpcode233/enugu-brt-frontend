import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker, useMap } from 'react-leaflet';
import { useLocation } from 'react-router-dom';

// Helper component to center map on selected route
function RouteFocus({ coordinates }) {
  const map = useMap();

  React.useEffect(() => {
    if (coordinates?.length) {
      const bounds = coordinates.map(coord => [coord[0], coord[1]]);
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [coordinates, map]);

  return null;
}

function RoutesPage() {
  const location = useLocation(); // Get the state passed from navigate
  const [activeRouteIndex, setActiveRouteIndex] = useState(null); // Track active route by index

  // Route data
  const routes = [
    {
      name: 'Holy Ghost → IMT Campus',
      description: 'Connects Holy Ghost hub northward along Ogui Road to IMT Campus.',
      notes: 'Serves the northern Ogui Road corridor, linking the central hub to the IMT educational institution.',
      color: 'blue',
      coordinates: [
        [6.4433, 7.5139],
        [6.4450, 7.5200],
        [6.4475, 7.5250],
        [6.4500, 7.5300],
        [6.4520, 7.5350],
      ],
      stops: [
        { name: 'Holy Ghost Terminal', description: 'Primary central bus terminal and transfer hub.', position: [6.4433, 7.5139] },
        { name: 'Asata Chemist', description: 'Stop serving the Asata area along Ogui Road.', position: [6.4450, 7.5200] },
        { name: 'Ogui Junction', description: 'Major intersection connecting Ogui Road.', position: [6.4475, 7.5250] },
        { name: 'IMT Campus', description: 'Final stop at the IMT educational institution.', position: [6.4500, 7.5300] },
        { name: 'IMT Annex', description: 'Annex of IMT Campus.', position: [6.4520, 7.5350] },
      ],
    },
    {
      name: 'Holy Ghost → Agbani Town',
      description: 'Connects Holy Ghost hub southward along Agbani Road to Agbani Town area.',
      notes: 'Main southern route via Agbani Rd, serving key locations like Gariki Market and ESUT gate access.',
      color: 'green',
      coordinates: [
        [6.4433, 7.5139],
        [6.4400, 7.5100],
        [6.4300, 7.5000],
        [6.4200, 7.4900],
        [6.4100, 7.4800],
        [6.4050, 7.4750],
      ],
      stops: [
        { name: 'Holy Ghost Terminal', description: 'Primary central bus terminal and transfer hub.', position: [6.4433, 7.5139] },
        { name: 'Mayor Bus Stop', description: 'Stop serving the Mayor area along Agbani Road.', position: [6.4400, 7.5100] },
        { name: 'Gariki Market', description: 'Major market stop along Agbani Road.', position: [6.4300, 7.5000] },
        { name: 'ESUT Gate', description: 'Stop near the Enugu State University of Technology.', position: [6.4200, 7.4900] },
        { name: 'Agbani Market', description: 'Market stop in Agbani Town.', position: [6.4050, 7.4750] },
      ],
    },
    {
      name: 'Opara Avenue → Emene',
      description: 'Runs eastward from Opara Avenue through Abakaliki Road, Airport Flyover, to Emene.',
      notes: 'Links city center to industrial and residential areas around Emene and Airport zone.',
      color: 'purple',
      coordinates: [
        [6.4470, 7.5110], // Opara Avenue
        [6.4495, 7.5200], // Abakaliki Road
        [6.4560, 7.5350], // Airport Flyover
        [6.4610, 7.5480], // Eke Emene
        [6.4660, 7.5550], // Emene Industrial Layout
        [6.4700, 7.5600], // Emene
      ],
      stops: [
        { name: 'Opara Avenue', description: 'Business hub near Okpara Square and city center.', position: [6.4470, 7.5110] },
        { name: 'Abakaliki Road Stop', description: 'Connector road leading to the Airport axis.', position: [6.4495, 7.5200] },
        { name: 'Airport Flyover', description: 'Strategic flyover near Airport junction.', position: [6.4560, 7.5350] },
        { name: 'Eke Emene', description: 'Main market area in Emene.', position: [6.4610, 7.5480] },
        { name: 'Emene Industrial Layout', description: 'Industrial area with warehouses and factories.', position: [6.4660, 7.5550] },
        { name: 'Emene Terminal', description: 'Final bus terminal in Emene zone.', position: [6.4700, 7.5600] },
      ],
    },
    {
      name: 'New Haven → Akanu Ibiam Airport',
      description: 'Connects New Haven area to Akanu Ibiam International Airport via Independence Layout.',
      notes: 'Provides a direct link from the residential New Haven area to the airport.',
      color: 'orange',
      coordinates: [
        [6.4500, 7.5100], // New Haven
        [6.4550, 7.5200], // Independence Layout
        [6.4600, 7.5300], // Airport Road
        [6.4670, 7.5500], // Akanu Ibiam Airport
      ],
      stops: [
        { name: 'New Haven Junction', description: 'Starting point at New Haven area.', position: [6.4500, 7.5100] },
        { name: 'Independence Layout', description: 'Stop near the Independence Layout area.', position: [6.4550, 7.5200] },
        { name: 'Airport Road Junction', description: 'Stop along Airport Road.', position: [6.4600, 7.5300] },
        { name: 'Akanu Ibiam Airport', description: 'Final stop at the Akanu Ibiam International Airport.', position: [6.4670, 7.5500] },
      ],
    },
  ];

  // Automatically set the active route based on the passed state
  useEffect(() => {
    if (location.state?.routeName) {
      const routeIndex = routes.findIndex(route => route.name === location.state.routeName);
      if (routeIndex !== -1) {
        setActiveRouteIndex(routeIndex);
      }
    }
  }, [location.state, routes]);

  return (
    <div className=" min-h-screen py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-green-500">BRT Routes Directory</h1>
        <p className="text-gray-400 mt-2 font-normal text-sm md:text-base">
          Explore all available routes and stops within the Enugu BRT network. Click on a route to view its path and stop details on the interactive map.
        </p>
      </div>

      {/* Map and Routes Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Map */}
        <div
          className="col-span-2 shadow-md rounded-lg overflow-hidden relative z-0 border-4 border-gray-100"
          style={{ height: '440px' }} // Fixed height for the map container
        >
          <div className="h-full">
            <MapContainer center={[6.4450, 7.5200]} zoom={13} className="w-full h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Auto-center map on selected route */}
              {activeRouteIndex !== null && (
                <RouteFocus coordinates={routes[activeRouteIndex].coordinates} />
              )}
              {/* Render all routes */}
              {routes.map((route, routeIndex) => (
                <React.Fragment key={routeIndex}>
                  {/* Main Route Line */}
                  <Polyline
                    positions={route.coordinates}
                    color={route.color}
                    weight={activeRouteIndex === routeIndex ? 6 : 3}
                    opacity={activeRouteIndex === routeIndex ? 1 : 0.5}
                  />

                  {/* Main Stops */}
                  {route.stops.map((stop, stopIndex) => (
                    <Marker key={`${stop.name}-${stopIndex}`} position={stop.position}>
                      <Popup>
                        <strong>{stop.name}</strong>
                        <p>{stop.description}</p>
                      </Popup>
                    </Marker>
                  ))}

                  {/* Sub-Stops */}
                  {route.subStops?.map((subStop, subStopIndex) => (
                    <CircleMarker
                      key={`subStop-${routeIndex}-${subStopIndex}`}
                      center={subStop.position}
                      radius={5}
                      color={route.color}
                      fillColor={route.color}
                      fillOpacity={0.8}
                    >
                      <Popup>
                        <p>{subStop.description}</p>
                      </Popup>
                    </CircleMarker>
                  ))}
                </React.Fragment>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Routes List */}
        <div className="bg-gray-50 shadow-md rounded-lg p-4 overflow-y-auto" style={{ maxHeight: '440px' }}>
          <h2 className="text-base font-bold text-gray-800 mb-3">Available Routes ({routes.length})</h2>
          {routes.map((route, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-3">
              <div
                className="flex justify-between items-center px-3 py-2 cursor-pointer"
                onClick={() => setActiveRouteIndex(activeRouteIndex === index ? null : index)}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: route.color }}></span>
                  <span className="text-gray-700 text-sm font-normal">{route.name}</span>
                </div>
                <button className="text-xs text-gray-500 border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
                  {activeRouteIndex === index ? 'Hide Stops' : 'View Stops'}
                </button>
              </div>
              {activeRouteIndex === index && (
                <div className="px-3 py-2 border-t border-gray-200">
                  <p className="text-xs text-gray-600 font-light mb-1">{route.description}</p>
                  <ul className="space-y-1">
                    {route.stops.map((stop, stopIndex) => (
                      <li key={`${stop.name}-${stopIndex}`} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-1"></span>
                        <div>
                          <p className="text-gray-700 text-xs font-medium">{stop.name}</p>
                          <p className="text-gray-500 text-xs">{stop.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      {/* Network Information Section */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Network Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-4xl font-bold text-green-700">4</p>
              <p className="text-lg text-gray-600">TOTAL ROUTES</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-700">25</p>
              <p className="text-lg text-gray-600">TOTAL STOPS</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-700">5:30<span className="text-lg">am</span></p>
              <p className="text-lg text-gray-600">FIRST BUS</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-700">10:00<span className="text-lg">pm</span></p>
              <p className="text-lg text-gray-600">LAST BUS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutesPage;
