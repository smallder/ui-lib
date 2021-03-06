/**
 * Select Grouped view
 */

lib.ns('lib.view');

lib.view.SelectGrouped = lib.extends(lib.view.Select, {
	/**
	 * @property {lib.presenter.SelectGrouped} presenter
	 * Presenter instance
	 */
	
	/**
	 * Creates the presenter instance
	 * @return {lib.presenter.SelectGrouped}
	 */
	getPresenterInstance: function() {
		return new lib.presenter.SelectGrouped(this);
	},
	
	/**
	 * Options renderer
	 */
	renderOptions: function() {
		var currentValue = this.getValue();
		this.domElement.empty();
		
		for (var groupNum = 0, groupCount = this.items.length; groupNum < groupCount; groupNum++) {
			var group = this.items[groupNum];
			
			var optgroupElement = $('<optgroup/>')
				.attr('label', group.name)
				.appendTo(this.domElement);
			
			for (var rowNum = 0, rowCount = group.items.length; rowNum < rowCount; rowNum++) {
				var value = group.items[rowNum][this.valueField];
				var title = group.items[rowNum][this.titleField];
				var optionElement = $('<option/>')
					.attr('value', value)
					.text(title)
					.appendTo(optgroupElement);
				
				if (value == currentValue) {
					optionElement.attr('selected', 'selected');
				}
			}
		}
	}
});
