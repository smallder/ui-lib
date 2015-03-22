/**
 * Field view
 */

lib.ns('lib.view');

lib.view.Field = lib.extends(lib.view.Base, {
	/**
	 * @property {lib.presenter.Field} presenter
	 * Presenter instance
	 */
	
	/**
	 * @property {String} type
	 * Field type
	 */
	type: 'text',
	
	/**
	 * @property {String} name
	 * Field name
	 */
	name: '',
	
	/**
	 * @property {String} value
	 * Field value
	 */
	value: '',
	
	/**
	 * Creates the DOM element instance
	 * @return {jQuery}
	 */
	getDomElementInstance: function() {
		return $('<input/>');
	},
	
	/**
	 * Creates the presenter instance
	 * @return {lib.presenter.Field}
	 */
	getPresenterInstance: function() {
		return new lib.presenter.Field(this);
	},
	
	/**
	 * Returns field value
	 * @return {String}
	 */
	getValue: function() {
		return this.value;
	},
	
	/**
	 * Sets field value
	 * @param {String} value Field value
	 */
	setValue: function(value) {
		this.value = value;
	},
	
	/**
	 * Default view renderer
	 */
	defaultRenderer: function() {
		this.domElement
			.attr('type', this.type)
			.attr('name', this.name)
			.val(this.value);
		
		this.callParent('defaultRenderer', arguments);
	}
});
