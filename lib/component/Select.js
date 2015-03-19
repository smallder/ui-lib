/**
 * Select component
 */

lib.ns('lib.component');

lib.component.Select = lib.extends(lib.component.Field, {
	store: null,
	valueField: '',
	titleField: '',
	getViewInstance: function(config) {
		return new lib.view.Select(config);
	},
	connect: function() {
		if (typeof this.store == 'string') {
			this.store = app.models.getInstance(this.store);
		}
		if (!this.store) {
			throw 'Store is undefined';
		}
		
		this.view.getPresenter().setStore(this.store);
		
		this.callParent('connect', arguments);
	}
});