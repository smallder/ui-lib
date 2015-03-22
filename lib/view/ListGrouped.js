/**
 * List Grouped view
 */

lib.ns('lib.view');

lib.view.ListGrouped = lib.extends(lib.view.List, {
	/**
	 * @property {lib.presenter.ListGrouped} presenter
	 * Presenter instance
	 */
	
	/**
	 * @property {Boolena} groupsFloating
	 * Use groups floating effect
	 */
	groupsFloating: true,
	
	/**
	 * Creates the DOM element instance
	 * @return {jQuery}
	 */
	getDomElementInstance: function() {
		var instance = this.callParent('getDomElementInstance', arguments);
		instance.addClass('view-list-grouped');
		return instance;
	},
	
	/**
	 * Creates the presenter instance
	 * @return {lib.presenter.ListGrouped}
	 */
	getPresenterInstance: function() {
		return new lib.presenter.ListGrouped(this);
	},
	
	/**
	 * Default view renderer
	 */
	defaultRenderer: function(parentElement) {
		this.callParent('defaultRenderer', arguments);
		
		this.setGroupsFloating();
	},
	
	/**
	 * List renderer
	 */
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
					itemElement.attr('data-selected', true);
				}
			}
		}
	},
	
	/**
	 * Sets position of the list
	 * @param {Integer} position List position
	 */
	setListPosition: function(position) {
		this.callParent('setListPosition', arguments);
		
		this.setGroupsFloating();
	},
	
	/**
	 * Sets groups floating effect if necessary
	 */
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
