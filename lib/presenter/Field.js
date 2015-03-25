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
		this.view.setValue(
			this.model.getFieldValue(this.name)
		);
		
		this.callParent('sync', arguments);
	},
	
	/**
	 * Keyup event handler
	 * @param {jQuery.Event} event Event
	 */
	onKeyup: function(event) {
		this.model.setFieldValue(
			this.name,
			this.view.getValue()
		);
	},
	
	/**
	 * Change event handler
	 * @param {jQuery.Event} event Event
	 */
	onChange: function(event) {
		this.model.save();
	}
});
