/**
 * List component
 */

lib.ns('lib.component');

lib.component.List = lib.extends(lib.component.Select, {
	/**
	 * @property {lib.view.List} view
	 * View instance
	 */
	
	/**
	 * Creates the new component view instance
	 * @param {Object} config View config
	 * @return {lib.view.List}
	 */
	getViewInstance: function(config) {
		return new lib.view.List(config);
	},
});