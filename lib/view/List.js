/**
 * List view
 */

lib.ns('lib.view');

lib.view.List = lib.extends(lib.view.Field, {
	valueField: '',
	titleField: '',
	getDomElementInstance: function() {
		return $('<ul/>').addClass('view-list no-user-select');
	},
	getPresenterInstance: function() {
		return new lib.presenter.List(this);
	},
	render: function(parentElement) {
		this.domElement.attr('data-name', this.name);
		
		this.renderList();
		
		lib.view.Base.prototype.render.apply(this, arguments);
	},
	renderList: function() {
		this.domElement.empty();
		
		for (var rowNum = 0, rowCount = this.items.length; rowNum < rowCount; rowNum++) {
			var value = this.items[rowNum][this.valueField];
			var title = this.items[rowNum][this.titleField];
			var itemElement = $('<li/>')
				.addClass('item')
				.attr('data-value', value)
				.text(title)
				.appendTo(this.domElement);
			
			if (value == this.value) {
				itemElement.addClass('selected');
			}
		}
	}
});

lib.mixin(
	lib.view.List,
	lib.mixins.Listable
);
