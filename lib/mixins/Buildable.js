/**
 * Buildable mixin
 */

lib.ns('lib.mixins');

/**
 * Buildable mixin constructor
 */
lib.mixins.Buildable = {
	/**
	 * @property {Function} dataBuilder
	 * Data builder implementation
	 */
	dataBuilder: function() {},
	
	/**
	 * Push a new data builder to the stack
	 * @param {Function} builder Data builder
	 */
	setDataBuilder: function(builder) {
		var prevBuilder = this.dataBuilder;
		this.dataBuilder = function() {
			return builder.call(this, prevBuilder.call(this));
		};
	}
};
