import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        scale: 100,
        center: [-40, 30]
      }}
    >
      <Graticule stroke="#DDD" />
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Line
        from={[2.3522, 48.8566]}
        to={[-74.006, 40.7128]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </ComposableMap>
  );
};

export default MapChart;
