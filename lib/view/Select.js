/**
 * Select view
 */

lib.ns('lib.view');

lib.view.Select = lib.extends(lib.view.Field, {
	/**
	 * @property {lib.presenter.Select} presenter
	 * Presenter instance
	 */
	
	/**
	 * @property {String} valueField
	 * Options value field
	 */
	valueField: '',
	
	/**
	 * @property {String} titleField
	 * Options title field
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
		return $('<select/>');
	},
	
	/**
	 * Creates the presenter instance
	 * @return {lib.presenter.Select}
	 */
	getPresenterInstance: function() {
		return new lib.presenter.Select(this);
	},
	
	/**
	 * Default view renderer
	 */
	defaultRenderer: function(parentElement) {
		this.domElement.attr('name', this.name);
		
		this.renderOptions();
		
		lib.view.Base.prototype.defaultRenderer.apply(this, arguments);
	},
	
	/**
	 * Options renderer
	 */
	renderOptions: function() {
		this.domElement.empty();
		
		for (var rowNum = 0, rowCount = this.items.length; rowNum < rowCount; rowNum++) {
			var value = this.items[rowNum][this.valueField];
			var title = this.items[rowNum][this.titleField];
			var optionElement = $('<option/>')
				.attr('value', value)
				.text(title)
				.appendTo(this.domElement);
			
			if (value == this.value) {
				optionElement.attr('selected', 'selected');
			}
		}
	}
});

lib.mixin(
	lib.view.Select,
	lib.mixins.Listable
);
