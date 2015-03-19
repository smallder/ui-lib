/**
 * Field component
 */

lib.ns('lib.component');

lib.component.Field = lib.extends(lib.component.Base, {
	name: '',
	getViewInstance: function(config) {
		return new lib.view.Field(config);
	}
});