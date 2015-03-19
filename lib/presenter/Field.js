/**
 * Field presenter
 */

lib.ns('lib.presenter');

lib.presenter.Field = lib.extends(lib.presenter.Base, {
	name: '',
	constructor: function(view) {
		this.name = view.name;
		
		this.callParent('constructor', arguments);
	},
	sync: function() {
		var data = this.model.getData();
		this.view.setValue(data[this.name]);
		
		this.callParent('sync', arguments);
	}
});