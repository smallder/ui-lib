/**
 * List component
 */

lib.ns('lib.component');

lib.component.List = lib.extends(lib.component.Select, {
	getViewInstance: function(config) {
		return new lib.view.List(config);
	},
});