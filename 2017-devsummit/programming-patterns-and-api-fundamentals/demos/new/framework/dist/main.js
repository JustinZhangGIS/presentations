'use strict';

define(['react', 'react/react-dom', 'esri/Map', 'esri/views/MapView', 'esri/layers/VectorTileLayer', 'app/components/zoom', 'app/components/compass', 'dojo/domReady!'], function (_react, _reactDom, _Map, _MapView, _VectorTileLayer, _zoom, _compass) {
  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _Map2 = _interopRequireDefault(_Map);

  var _MapView2 = _interopRequireDefault(_MapView);

  var _VectorTileLayer2 = _interopRequireDefault(_VectorTileLayer);

  var _zoom2 = _interopRequireDefault(_zoom);

  var _compass2 = _interopRequireDefault(_compass);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var map = new _Map2.default({
    basemap: "streets-navigation-vector"
  });
  var view = new _MapView2.default({
    container: document.getElementById('viewDiv'),
    map: map,
    center: [-118.174, 34.024],
    zoom: 12,
    ui: {
      components: []
    }
  });
  var leftNode = document.createElement('div');
  var rightNode = document.createElement('div');
  var btn = document.getElementById("switchView");
  var container = document.getElementById("viewContainer");
  btn.addEventListener("click", function () {
    container.classList.toggle("view-portrait");
    container.classList.toggle("view-landscape");

    view._measure();
  });
  view.ui.add(leftNode, 'bottom-left');
  view.ui.add(rightNode, 'bottom-right');

  _reactDom2.default.render(_react2.default.createElement(_zoom2.default, {
    view: view
  }), leftNode);

  _reactDom2.default.render(_react2.default.createElement(_compass2.default, {
    view: view
  }), rightNode);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzeCIsInNvdXJjZXNDb250ZW50IjpbXX0=