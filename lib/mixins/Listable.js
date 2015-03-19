/**
 * Listable mixin
 */

lib.ns('lib.mixins');

lib.mixins.Listable = function(name) {};

lib.mixins.Listable.mixinId = 'Listable';

lib.apply(lib.mixins.Listable.prototype, {
	items: [],
	getItems: function() {
		return this.items;
	},
	setItems: function(items) {
		this.items = items;
	}
});
