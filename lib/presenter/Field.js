/**
 * Field presenter
 */

lib.ns('lib.presenter');

lib.presenter.Field = lib.extends(lib.presenter.Base, {
	/**
	 * @property {lib.view.Field} view
	 * View instance
	 */
	
	/**
	 * @property {String} name
	 * Field name
	 */
	name: '',
	
	/**
	 * Presenter constructor
	 * @param {lib.view.Field} view View instance
	 */
	constructor: function(view) {
		this.name = view.name;
		
		this.callParent('constructor', arguments);
	},
	
	/**
	 * Sets presenter to actual state
	 */
	sync: function() {
		var data = this.model.getData();
		this.view.setValue(data[this.name]);
		
		this.callParent('sync', arguments);
	}
});
