/**
 * List presenter
 */

lib.ns('lib.presenter');

lib.presenter.ListGrouped = lib.extends(lib.presenter.List, {
	/**
	 * @property {lib.view.ListGrouped} view
	 * View instance
	 */
	
	/**
	 * Presenter constructor
	 * @param {lib.view.ListGrouped} view View instance
	 */
	constructor: function(view) {
		this.callParent('constructor', arguments);
		
		this.groupableInit();
	}
});

lib.mixin(
	lib.presenter.ListGrouped,
	lib.mixins.Groupable
);
