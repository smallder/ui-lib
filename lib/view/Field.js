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
	 * Creates the DOM element instance
	 * @return {jQuery}
	 */
	getDomElementInstance: function() {
		return $('<input/>');
	},
	
	/**
	 * Returns event types that view must send to the presenter
	 * @return {Array}
	 */
	getEventsToBind: function() {
		var events = this.callParent('getEventsToBind');
		events.push('keyup');
		events.push('change');
		
		return events;
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
		return this.domElement.val();
	},
	
	/**
	 * Sets field value
	 * @param {String} value Field value
	 */
	setValue: function(value) {
		this.domElement.val(value);
	},
	
	/**
	 * Default view renderer
	 */
	defaultRenderer: function() {
		this.domElement
			.attr('type', this.type)
			.attr('name', this.name);
		
		this.callParent('defaultRenderer', arguments);
	}
});
