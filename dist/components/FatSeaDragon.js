"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _openseadragon = _interopRequireDefault(require("openseadragon"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@mui/material/Button"));

var _iconsMaterial = require("@mui/icons-material");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FatSeaDragon = props => {
  const [viewer, setViewer] = (0, _react.useState)(null);

  const InitOpenseadragon = () => {
    viewer && viewer.destroy();
    setViewer((0, _openseadragon.default)({
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
      showNavigator: true,
      zoomInButton: "zoom-in",
      zoomOutButton: "zoom-out",
      homeButton: "home",
      fullPageButton: "full-page",
      nextButton: "next",
      previousButton: "previous"
    }));
  };

  (0, _react.useEffect)(() => {
    InitOpenseadragon();
    return () => {
      viewer && viewer.destroy();
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    id: "zoom-in"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    sx: {
      height: "62px",
      marginRight: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ZoomIn, null))), /*#__PURE__*/_react.default.createElement("div", {
    id: "zoom-out"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    sx: {
      height: "62px",
      marginRight: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.ZoomOut, null))), /*#__PURE__*/_react.default.createElement("div", {
    id: "full-page"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    sx: {
      height: "62px",
      marginRight: "5px"
    }
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Fullscreen, null))), /*#__PURE__*/_react.default.createElement("div", {
    id: "openSeaDragon",
    style: {
      height: props.height,
      width: props.width,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.1)",
      marginTop: "5px",
      borderRadius: "5px"
    }
  }));
};

var _default = FatSeaDragon;
exports.default = _default;