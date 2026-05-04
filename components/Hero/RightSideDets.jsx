import React from "react";
import { Globe3D } from "@/components/ui/3d-globe";

const RightSideDets = () => {
  // My Profile Dets for 3D globe
  const myMarkers = [
    { lat: 23.8103, lng: 90.4125, src: "/hasib.webp", label: "Dhaka" },
  ];
  return (
    <Globe3D
      markers={myMarkers}
      config={{
        atmosphereColor: "#4da6ff",
        atmosphereIntensity: 20,
        bumpScale: 100,
        autoRotateSpeed: 0.7,
      }}
      onMarkerClick={(marker) => {
        console.log("Clicked marker:", myMarkers.label);
      }}
      onMarkerHover={(marker) => {
        if (marker) {
          console.log("Hovering:", myMarkers.label);
        }
      }}
    />
  );
};

export default RightSideDets;
