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
	setDomElement: function(domElement) {
		this.callParent('setDomElement', arguments);
		
		lib.setDraggable(this.domElement);
	},
	getEventsToBind: function() {
		var events = this.callParent('getEventsToBind');
		events.push('dragstart');
		events.push('drag');
		events.push('dragend');
		
		return events;
	},
	getPresenterInstance: function() {
		return new lib.presenter.List(this);
	},
	defaultRenderer: function(parentElement) {
		this.domElement.attr('data-name', this.name);
		
		this.renderList();
		
		lib.view.Base.prototype.defaultRenderer.apply(this, arguments);
		
		if(!this.domElement.parent().is('.view-list-wrap')) {
			this.domElement.wrap(
				$('<div/>')
				.addClass('view-list-wrap')
			);
		}
	},
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
	getHeight: function() {
		return this.domElement.parent().height();
	},
	getListHeight: function() {
		return this.domElement.height();
	},
	setPosition: function (position) {
		this.domElement.css('margin-top', position);
	}
});

lib.mixin(
	lib.view.List,
	lib.mixins.Listable
);
