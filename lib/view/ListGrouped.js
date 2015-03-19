/**
 * List Grouped view
 */

lib.ns('lib.view');

lib.view.ListGrouped = lib.extends(lib.view.List, {
	getDomElementInstance: function() {
		var instance = this.callParent('getDomElementInstance', arguments);
		instance.addClass('view-list-grouped');
		return instance;
	},
	getPresenterInstance: function() {
		return new lib.presenter.ListGrouped(this);
	},
	renderList: function() {
		this.domElement.empty();
		
		for (var groupNum = 0, groupCount = this.items.length; groupNum < groupCount; groupNum++) {
			var group = this.items[groupNum];
			
			var groupElement = $('<li/>')
				.addClass('list-group')
				.appendTo(this.domElement);
			
			var groupHeader = $('<span/>')
				.addClass('group-title')
				.html(group.name)
				.appendTo(groupElement);
			
			var groupItems = $('<ul/>')
				.appendTo(groupElement);
			
			for (var rowNum = 0, rowCount = group.items.length; rowNum < rowCount; rowNum++) {
				var item = group.items[rowNum];
				var value = item[this.valueField];
				var title = item[this.titleField];
				var itemElement = $('<li/>')
					.addClass('item')
					.data('item', item)
					.attr('data-value', value)
					.text(title)
					.appendTo(groupItems);
				
				if (value == this.value) {
					itemElement.attr('selected', 'selected');
				}
			}
		}
	}
});
