/**
 * Select view
 */

lib.ns('lib.view');

lib.view.Select = lib.extends(lib.view.Field, {
	valueField: '',
	titleField: '',
	getDomElementInstance: function() {
		return $('<select/>');
	},
	getPresenterInstance: function() {
		return new lib.presenter.Select(this);
	},
	defaultRenderer: function(parentElement) {
		this.domElement.attr('name', this.name);
		
		this.renderOptions();
		
		lib.view.Base.prototype.defaultRenderer.apply(this, arguments);
	},
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
