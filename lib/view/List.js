/**
 * List view
 */

lib.ns('lib.view');

lib.view.List = lib.extends(lib.view.Field, {
	/**
	 * @property {lib.presenter.List} presenter
	 * Presenter instance
	 */
	
	/**
	 * @property {String} valueField
	 * List value field
	 */
	valueField: '',
	
	/**
	 * @property {String} titleField
	 * List title field
	 */
	titleField: '',
	
	/**
	 * View constructor
	 * @param {Object} config View config
	 */
	constructor: function(config) {
		this.callParent('constructor', arguments);
		
		this.listableInit();
	},
	
	/**
	 * Creates the DOM element instance
	 * @return {jQuery}
	 */
	getDomElementInstance: function() {
		return $('<ul/>')
			.addClass('view-list no-user-select')
			.attr('unselectable', 'on');
	},
	
	/**
	 * Sets DOM element instance
	 * @param {jQuery} domElement DOM element instance
	 */
	setDomElement: function(domElement) {
		this.callParent('setDomElement', arguments);
		
		lib.setDraggable(this.domElement);
	},
	
	/**
	 * Returns event types that view must send to the presenter
	 * @return {Array}
	 */
	getEventsToBind: function() {
		var events = this.callParent('getEventsToBind');
		events.push('dragstart');
		events.push('drag');
		events.push('dragend');
		
		return events;
	},
	
	/**
	 * Creates the presenter instance
	 * @return {lib.presenter.List}
	 */
	getPresenterInstance: function() {
		return new lib.presenter.List(this);
	},
	
	/**
	 * Default view renderer
	 */
	defaultRenderer: function(parentElement) {
		this.domElement.attr('data-name', this.name);
		
		this.renderList();
		
		lib.view.Base.prototype.defaultRenderer.apply(this, arguments);
		
		if(this.domElement.parent().is('.component-wrapper')) {
			this.domElement.wrap(
				$('<div/>')
				.addClass('view-list-wrap')
			);
		}
	},
	
	/**
	 * List renderer
	 */
	renderList: function() {
		this.domElement.empty();
		
		for (var rowNum = 0, rowCount = this.items.length; rowNum < rowCount; rowNum++) {
			var item = this.items[rowNum];
			var value = item[this.valueField];
			var title = item[this.titleField];
			var itemElement = $('<li/>')
				.addClass('item')
				.data('item', item)
				.attr('data-value', value)
				.text(title)
				.appendTo(this.domElement);
			
			if (value == this.value) {
				itemElement.addClass('selected');
			}
		}
	},
	
	/**
	 * Returns height of view
	 * @return {Integer}
	 */
	getHeight: function() {
		return this.domElement.parent().height();
	},
	
	/**
	 * Returns height of list
	 * @return {Integer}
	 */
	getListHeight: function() {
		return this.domElement.height();
	},
	
	/**
	 * Sets position of the list
	 * @param {Integer} position List position
	 */
	setListPosition: function (position) {
		this.domElement.css('margin-top', position);
	}
});

lib.mixin(
	lib.view.List,
	lib.mixins.Listable
);
