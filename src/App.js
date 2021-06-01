import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function App() {
  const [viewport, setViewport] = useState({
    width: 450,
    height: 450,
    latitude: 34.86354479360796,
    longitude: 27.971493017211905,
    zoom: 3,
  });

  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/hatibe/ckm6qgle81jsn17k60eaow7y1'
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
      <footer>
        <script src='greek-athena.svg'></script>
      </footer>
    </>
  );
}
