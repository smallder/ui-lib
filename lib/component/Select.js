/**
 * Select component
 */

lib.ns('lib.component');

lib.component.Select = lib.extends(lib.component.Field, {
	/**
	 * @property {lib.view.Select} view
	 * View instance
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
	 * Creates the new view instance
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
			this.store = lib.Application.getInstance().models.getInstance(this.store);
		}
		if (!this.store) {
			throw 'Store is undefined';
		}
		
		this.view.getPresenter().setStore(this.store);
		
		this.callParent('connect', arguments);
	}
});