/**
 * Select Grouped presenter
 */

lib.ns('lib.presenter');

lib.presenter.SelectGrouped = lib.extends(lib.presenter.Select, {
	/**
	 * @property {lib.view.SelectGrouped} view
	 * View instance
	 */
	
	/**
	 * Presenter constructor
	 * @param {lib.view.SelectGrouped} view View instance
	 */
	constructor: function(view) {
		this.callParent('constructor', arguments);
		
		this.groupableInit();
	}
});

lib.mixin(
	lib.presenter.SelectGrouped,
	lib.mixins.Groupable
);
