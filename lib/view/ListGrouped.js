/**
 * List Grouped view
 */

lib.ns('lib.view');

lib.view.ListGrouped = lib.extends(lib.view.List, {
	groupsFloating: true,
	getDomElementInstance: function() {
		var instance = this.callParent('getDomElementInstance', arguments);
		instance.addClass('view-list-grouped');
		return instance;
	},
	getPresenterInstance: function() {
		return new lib.presenter.ListGrouped(this);
	},
	defaultRenderer: function(parentElement) {
		this.callParent('defaultRenderer', arguments);
		
		this.setGroupsFloating();
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
	},
	setListPosition: function(position) {
		this.callParent('setListPosition', arguments);
		
		this.setGroupsFloating();
	},
	setGroupsFloating: function() {
		if (!this.groupsFloating) {
			return;
		}
		
		var componentTop = this.domElement.parent().offset().top;
		
		//Focusability
		this.domElement.find('.list-group').each(function() {
			var top = $(this).offset().top;
			if (top >= componentTop) {
				$(this)
					.addClass('in-focus')
					.removeClass('out-focus');
			} else {
				$(this)
					.addClass('out-focus')
					.removeClass('in-focus');
			}
		});
		
		//Fadeability
		this.domElement.find('.list-group')
			.removeClass('fade-in')
			.removeClass('fade-out')
			.filter('.out-focus:last')
				.addClass('fade-out')
			.end()
			.filter('.in-focus:first')
				.addClass('fade-in');
		
		//Moveability
		var prevTitle = this.domElement.find('.fade-out .group-title');
		var nextTitle = this.domElement.find('.fade-in .group-title');
		var limit = prevTitle.outerHeight() || 0;
		var distance = nextTitle.offset().top - componentTop - limit;
		prevTitle.css('top', Math.min(0, distance));
	}
});
