/**
 * Listable View mixin
 */

lib.ns('lib.mixins');

lib.mixins.ListableView = function(name) {};

lib.mixins.ListableView.mixinId = 'ListableView';

lib.apply(lib.mixins.ListableView.prototype, {
	items: [],
	getItems: function() {
		return this.items;
	},
	setItems: function(items) {
		this.items = items;
	}
});
