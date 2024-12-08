"use client";

import * as React from "react";
import { Map } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function HtmlMap() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: "100%", height: 400 }}
      mapStyle="https://demotiles.maplibre.org/style.json"
    />
  );
}
