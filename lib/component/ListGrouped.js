/**
 * List Grouped component
 */

lib.ns('lib.component');

lib.component.ListGrouped = lib.extends(lib.component.SelectGrouped, {
	getViewInstance: function(config) {
		return new lib.view.ListGrouped(config);
	}
});