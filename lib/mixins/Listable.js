/**
 * Listable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Listable = {
	/**
	 * @property {Array} items
	 * List items
	 */
	items: [],
	
	/**
	 * Init mixin
	 */
	listableInit: function() {
		this.items = [];
	},
	
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
};
