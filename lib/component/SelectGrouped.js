/**
 * Select Grouped component
 */

lib.ns('lib.component');

lib.component.SelectGrouped = lib.extends(lib.component.Select, {
	groupField: '',
	groupPrefixLen: 0,
	connect: function() {
		this.callParent('connect', arguments);
		
		if (!this.groupField) {
			this.groupField = this.titleField;
		}
		this.view.getPresenter().setGroupField(this.groupField);
		this.view.getPresenter().setGroupPrefixLen(this.groupPrefixLen);
	},
	getViewInstance: function(config) {
		return new lib.view.SelectGrouped(config);
	}
});