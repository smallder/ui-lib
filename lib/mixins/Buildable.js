/**
 * Buildable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Buildable = function(name) {};

lib.mixins.Buildable.mixinId = 'Buildable';

lib.apply(lib.mixins.Buildable.prototype, {
	dataBuilder: null,
	setDataBuilder: function(builder) {
		var prevBuilder = this.dataBuilder || function() {};
		this.dataBuilder = function() {
			return builder.call(this, prevBuilder.call(this));
		};
	}
});
