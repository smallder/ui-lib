/**
 * Object
 */
lib.Object = function() {
	if (typeof this.mixins == 'object') {
		for (var key in this.mixins) {
			this.mixins[key].call(this, key, this.mixins[key]);
		}
	}
};

lib.Object.prototype.mixins = {};
