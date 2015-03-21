/**
 * Listable mixin
 */

lib.ns('lib.mixins');

/**
 * Listable mixin constructor
 * @param {String} name Mixin name
 */
lib.mixins.Listable = function(name) {};

lib.mixins.Listable.mixinId = 'Listable';

lib.apply(lib.mixins.Listable.prototype, {
	/**
	 * @property {Array} items
	 * List items
	 */
	items: [],
	
	/**
	 * Returns list items
	 * @return {Array}
	 */
	getItems: function() {
		return this.items;
	},
	
	/**
	 * Sets list items
	 * @param {Array} List items
	 */
	setItems: function(items) {
		this.items = items;
	}
});
