/**
 * Select Grouped component
 */

lib.ns('lib.component');

lib.component.SelectGrouped = lib.extends(lib.component.Select, {
	/**
	 * @property {lib.view.SelectGrouped} view
	 * View instance
	 */
	
	/**
	 * @property {String} groupField
	 * Field name for grouping
	 */
	groupField: '',
	
	/**
	 * @property {Integer} groupPrefixLen
	 * Grouping field value limiter
	 */
	groupPrefixLen: 0,
	
	/**
	 * Creates the new component view instance
	 * @param {Object} config View config
	 * @return {lib.view.SelectGrouped}
	 */
	getViewInstance: function(config) {
		return new lib.view.SelectGrouped(config);
	},
	
	/**
	 * Connect component elements within
	 */
	connect: function() {
		this.callParent('connect', arguments);
		
		if (!this.groupField) {
			this.groupField = this.titleField;
		}
		this.view.getPresenter().setGroupField(this.groupField);
		this.view.getPresenter().setGroupPrefixLen(this.groupPrefixLen);
	}
});