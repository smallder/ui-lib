/**
 * List Grouped component
 */

lib.ns('lib.component');

lib.component.ListGrouped = lib.extends(lib.component.SelectGrouped, {
	/**
	 * @property {lib.view.ListGrouped} view
	 * View instance
	 */
	
	/**
	 * @property {Boolean} groupsFloating
	 * Use groups floating effect
	 */
	groupsFloating: true,
	
	/**
	 * Creates the new component view instance
	 * @param {Object} config View config
	 * @return {lib.view.ListGrouped}
	 */
	getViewInstance: function(config) {
		return new lib.view.ListGrouped(config);
	}
});