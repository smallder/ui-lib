/**
 * Field component
 */

lib.ns('lib.component');

lib.component.Field = lib.extends(lib.component.Base, {
	/**
	 * @property {String} name
	 * Field name
	 */
	name: '',
	
	/**
	 * @property {lib.view.Field} view
	 * View instance
	 */
	
	/**
	 * Creates the new view instance
	 * @param {Object} config View config
	 * @return {lib.view.Field}
	 */
	getViewInstance: function(config) {
		return new lib.view.Field(config);
	}
});