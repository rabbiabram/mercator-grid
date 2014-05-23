function MercatorGrid(options) {
    var self = this;
	self.cellSize = 1;
}

MercatorGrid.prototype.coordsPolynome = function(x) {
	x = Math.abs(x);
	return 1.75477 * Math.pow(10, -6) * Math.pow(x, 3) -0.000365418 * Math.pow(x, 2) + 0.00845663 * x + 0.954619;
};


MercatorGrid.prototype.coordsToGridPosition = function(lat, lng, step) {
	var self = this;
	step = step || self.cellSize;
	var j = 0;
	var pos = {x : null, y: null};
	pos.x = Math.round((lng / (step * 2)));
	var absLat = Math.abs(Math.round(lat));
	var mod = absLat / Math.round(lat);
	for (var i=0; i <= absLat; i += step * 2 * self.coordsPolynome(i)) {
		j++;
	}
	pos.y = j * mod;
	return pos;
};

MercatorGrid.prototype.gridPositionToLatLng = function(x, y, step) {
	var self = this;
	step = step || self.cellSize;
	var latLng = {lat : null, lng: null};
	var mod = (y == 0) ? 1 : y / Math.abs(y);
	latLng.lng = x * step * 2;
	latLng.lat = 0;
	for (var i=1; i < Math.abs(y);i++) {
		latLng.lat += step * 2 * self.coordsPolynome(latLng.lat);
	}
	latLng.lat *= mod;
	return latLng;
};
if (typeof module != 'undefined') {
	var pjson = require('./package.json');
	exports.version = pjson.version;
	module.exports.MercatorGrid = MercatorGrid;
	module.exports.version = pjson.version;
}




