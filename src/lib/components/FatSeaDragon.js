import OpenSeaDragon from "openseadragon";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Add, Remove, Fullscreen, ZoomIn, ZoomOut, ZoomInMap, ZoomOutMap } from '@mui/icons-material';

const FatSeaDragon = (props) => {

  const [viewer, setViewer] = useState( null);
  
  const InitOpenseadragon = () => {
    viewer && viewer.destroy();
    setViewer(
      OpenSeaDragon({
        id: "openSeaDragon",
        // EXAMPLES FOR PREFIXURL AND TILESOURCES
        // prefixUrl: "http://goblinrum.mynetgear.com/images/outputs/testimage1_out/",
        // tileSources: "http://goblinrum.mynetgear.com/images/outputs/testimage1_out/info.json",
        // prefixUrl: "http://goblinrum.mynetgear.com/images/outputs/",
        // tileSources: "http://goblinrum.mynetgear.com/images/outputs/testimage1_outdzi.dzi",
        prefixUrl: props.prefixUrl,
        tileSources: props.tileSources,
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
        zoomPerScroll: 2,
        showNavigator: props.showNavigator,
        zoomInButton:   "zoom-in",
        zoomOutButton:  "zoom-out",
        homeButton:     "home",
        fullPageButton: "full-page",
        nextButton:     "next",
        previousButton: "previous",
      })
    );
  };

  useEffect(() => {
    InitOpenseadragon();
    return () => {
        viewer && viewer.destroy();
    };
  }, []);

  return (
    <div>
      <div id="zoom-in"><Button variant="contained" sx={{ height: "62px", marginRight: "5px"}}><ZoomIn /></Button></div>
      <div id="zoom-out"><Button variant="contained" sx={{ height: "62px", marginRight: "5px"}}><ZoomOut /></Button></div>
      <div id="full-page"><Button variant="contained" sx={{ height: "62px", marginRight: "5px"}}><Fullscreen /></Button></div>
      <div 
          id="openSeaDragon" 
          style={{
              height: props.height,
              width: props.width,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.1)",
              marginTop: "5px",
              borderRadius: "5px",
          }}
      />
    </div>
  );
};

export default FatSeaDragon;