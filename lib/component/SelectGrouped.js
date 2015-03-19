/**
 * Select Grouped component
 */

lib.ns('lib.component');

lib.component.SelectGrouped = lib.extends(lib.component.Select, {
	groupField: '',
	connect: function() {
		this.callParent('connect', arguments);
		
		if (!this.groupField) {
			this.groupField = this.titleField;
		}
		this.view.getPresenter().setGroupField(this.groupField);
	},
	getViewInstance: function(config) {
		return new lib.view.SelectGrouped(config);
	}
});