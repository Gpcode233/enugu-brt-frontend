import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

function RoutesPage() {
  const [activeRouteIndex, setActiveRouteIndex] = useState(null); // Track active route by index

  // Route data
  const routes = [
    {
      name: 'Holy Ghost → IMT Campus',
      description: 'Connects Holy Ghost hub northward along Ogui Road to IMT Campus.',
      notes: 'Serves the northern Ogui Road corridor, linking the central hub to the IMT educational institution.',
      color: 'blue',
      coordinates: [
        [6.4433, 7.5139], // Holy Ghost
        [6.4450, 7.5200], // Asata Chemist
        [6.4475, 7.5250], // Ogui Junction
        [6.4500, 7.5300], // IMT Campus
      ],
      stops: [
        { name: 'Holy Ghost Terminal', description: 'Primary central bus terminal and transfer hub.', position: [6.4433, 7.5139] },
        { name: 'Asata Chemist', description: 'Stop serving the Asata area along Ogui Road.', position: [6.4450, 7.5200] },
        { name: 'Ogui Junction', description: 'Major intersection connecting Ogui Road.', position: [6.4475, 7.5250] },
        { name: 'IMT Campus', description: 'Final stop at the IMT educational institution.', position: [6.4500, 7.5300] },
      ],
    },
    {
      name: 'Holy Ghost → Agbani Town',
      description: 'Connects Holy Ghost hub southward along Agbani Road to Agbani Town area.',
      notes: 'Main southern route via Agbani Rd, serving key locations like Gariki Market and ESUT gate access.',
      color: 'green',
      coordinates: [
        [6.4433, 7.5139], // Holy Ghost
        [6.4400, 7.5100], // Mayor Bus Stop
        [6.4300, 7.5000], // Gariki Market
        [6.4200, 7.4900], // ESUT Gate
        [6.4100, 7.4800], // Agbani Town
      ],
      stops: [
        { name: 'Holy Ghost Terminal', description: 'Primary central bus terminal and transfer hub.', position: [6.4433, 7.5139] },
        { name: 'Mayor Bus Stop', description: 'Stop serving the Mayor area along Agbani Road.', position: [6.4400, 7.5100] },
        { name: 'Gariki Market', description: 'Major market stop along Agbani Road.', position: [6.4300, 7.5000] },
        { name: 'ESUT Gate', description: 'Stop near the Enugu State University of Technology.', position: [6.4200, 7.4900] },
        { name: 'Agbani Town', description: 'Final stop at Agbani Town.', position: [6.4100, 7.4800] },
      ],
    },
    {
      name: 'UNEC → Okpara Avenue',
      description: 'Connects UNEC Campus, Holy Ghost Hub, and Okpara Ave Hub via Zik Ave, Edinburgh Rbt, Parklane/Polo.',
      notes: 'Crucial connector route linking the southern UNEC area (Gate), the central Holy Ghost hub, and the GRA/Admin Okpara Ave hub via Polo Park.',
      color: 'orange',
      coordinates: [
        [6.4233, 7.5000], // UNEC Main Gate
        [6.4300, 7.5100], // Rangers Ave Junction
        [6.4400, 7.5200], // Edinburgh Roundabout
        [6.4433, 7.5139], // Holy Ghost
        [6.4500, 7.5250], // Okpara Avenue
      ],
      stops: [
        { name: 'UNEC Main Gate', description: 'Main entrance stop & functional terminal for University of Nigeria Enugu Campus.', position: [6.4233, 7.5000] },
        { name: 'Rangers Ave Junction', description: 'Junction accessing Rangers Avenue and parts of Independence Layout.', position: [6.4300, 7.5100] },
        { name: 'Edinburgh Roundabout', description: 'Major roundabout connecting Zik Avenue and Polo Park.', position: [6.4400, 7.5200] },
        { name: 'Holy Ghost Terminal', description: 'Primary central bus terminal and transfer hub.', position: [6.4433, 7.5139] },
        { name: 'Okpara Avenue', description: 'Final stop at the administrative/business district.', position: [6.4500, 7.5250] },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700">BRT Routes Directory</h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore all available routes and stops within the Enugu BRT network. Click on a route to view its path and stop details on the interactive map.
        </p>
      </div>

      {/* Map and Routes Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Map */}
        <div className="col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="h-96">
            <MapContainer center={[6.4450, 7.5200]} zoom={13} className="w-full h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {/* Render all routes */}
              {routes.map((route, routeIndex) => (
                <React.Fragment key={routeIndex}>
                  <Polyline positions={route.coordinates} color={route.color} weight={4} />
                  {route.stops.map((stop, stopIndex) => (
                    <Marker key={stopIndex} position={stop.position}>
                      <Popup>
                        <strong>{stop.name}</strong>
                        <p>{stop.description}</p>
                      </Popup>
                    </Marker>
                  ))}
                </React.Fragment>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Routes List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Available Routes ({routes.length})</h2>
          {routes.map((route, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-4">
              <div
                className="flex justify-between items-center px-4 py-3 cursor-pointer"
                onClick={() => setActiveRouteIndex(activeRouteIndex === index ? null : index)}
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full`} style={{ backgroundColor: route.color }}></span>
                  <span className="text-gray-700 font-medium">{route.name}</span>
                </div>
                <button className="text-sm text-gray-500 border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
                  {activeRouteIndex === index ? ' Stops' : ' Stops'}
                </button>
              </div>
              {activeRouteIndex === index && (
                <div className="px-4 py-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">{route.description}</p>
                  <p className="text-sm text-gray-500 mb-2">{route.notes}</p>
                  <p className="text-sm text-green-600 font-medium mb-2">Two-way route</p>
                  <ul className="space-y-2">
                    {route.stops.map((stop, stopIndex) => (
                      <li key={stopIndex} className="flex items-start gap-2">
                        <span className="w-3 h-3 bg-red-500 rounded-full mt-1"></span>
                        <div>
                          <p className="text-gray-700 font-medium">{stop.name}</p>
                          <p className="text-sm text-gray-500">{stop.description}</p>
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
    </div>
  );
}

export default RoutesPage;