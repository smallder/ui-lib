/**
 * Select component
 */

lib.ns('lib.component');

lib.component.Select = lib.extends(lib.component.Field, {
	/**
	 * @property {lib.view.Select} view
	 * View instance (inherited from lib.component.Field)
	 */
	
	/**
	 * @property {lib.modelBase/String} store
	 * Store used
	 */
	store: null,
	
	/**
	 * @property {String} valueField
	 * Field for value
	 */
	valueField: '',
	
	/**
	 * @property {String} titleField
	 * Field for title
	 */
	titleField: '',
	
	/**
	 * Creates a new component view instance
	 * @param {Object} config View config
	 * @return {lib.view.Select}
	 */
	getViewInstance: function(config) {
		return new lib.view.Select(config);
	},
	
	/**
	 * Connect component elements within
	 */
	connect: function() {
		if (typeof this.store == 'string') {
			this.store = app.models.getInstance(this.store);
		}
		if (!this.store) {
			throw 'Store is undefined';
		}
		
		this.view.getPresenter().setStore(this.store);
		
		this.callParent('connect', arguments);
	}
});