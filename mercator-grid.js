var MercatorGrid = function(options) {
    var self = this;
    self.cellSize = options.cellSize || 1;
}

if (typeof exports == 'function') {
    exports.MercatorGrid = MercatorGrid;
}
